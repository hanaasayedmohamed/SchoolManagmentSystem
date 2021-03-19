using SchoolManagment.Common;
using SchoolManagment.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagment.Repo
{
    public interface IStudentRepo
    {
        PagedList<Student> GetStudents(StudentParameters pagingParameter);
        Student InsertStudent(Student student);
    }
}
