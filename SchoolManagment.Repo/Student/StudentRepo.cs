using Microsoft.EntityFrameworkCore;
using SchoolManagment.Common;
using SchoolManagment.Domain.Model;
using SchoolManagment.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SchoolManagment.Repo
{
   public class StudentRepo : IStudentRepo
    {
        private readonly FirstCoreAppDbContext _dbContext;

        public StudentRepo(FirstCoreAppDbContext dbContext)
        {
            this._dbContext = dbContext;

        }

        public PagedList<Student> GetStudents(StudentParameters pagingParameter)
        {
            var students = FindAll();

            SearchByName(ref students, pagingParameter.GradeName);

            return PagedList<Student>.ToPagedList(students.OrderBy(on => on.StudentName),
        pagingParameter.PageNumber,
        pagingParameter.PageSize);

        }

        public Student InsertStudent(Student student)
        {
            if (IsStudentNameUnique(student.StudentName))
            {
                _dbContext.Students.Add(student);
                _dbContext.SaveChanges();
                return student;
            }
            else
            {
                throw new CustomException("Error_409", ResponseErrorMessage.UniqueRuleViolationMessage);
            }
        }

        private IQueryable<Student> FindAll()
        {
            return _dbContext.Students.Include(C => C.Grade).AsQueryable();
        }

        private void SearchByName(ref IQueryable<Student> students, string gradeName)
        {
            if (!students.Any() || string.IsNullOrWhiteSpace(gradeName))
                return;
            students = students.Where(o => o.Grade.GradeName.ToLower().Contains(gradeName.Trim().ToLower()));
        }

        private bool IsStudentNameUnique(string StudentName)
        {
            var student = FindAll().Where(C => C.StudentName == StudentName).FirstOrDefault();
            return (student == null) ? true : false;
        }
    }
}
