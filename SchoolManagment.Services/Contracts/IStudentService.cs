using SchoolManagment.Common;
using SchoolManagment.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SchoolManagment.Services
{
   public interface IStudentService
    {
        PagedList<Student> GetStudents(StudentParameters pagingParameter);
        Student InsertStudent(Student student); // 
    }
}
