using SchoolManagment.Common;
using SchoolManagment.Domain.Model;

namespace SchoolManagment.Services
{
   public interface IStudentService
    {
        PagedList<Student> GetStudents(StudentParameters pagingParameter);
        Student InsertStudent(Student student); 
    }
}
