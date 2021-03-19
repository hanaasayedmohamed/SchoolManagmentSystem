using SchoolManagment.Common;
using SchoolManagment.Domain.Model;
using SchoolManagment.Repo;
using System.Linq;

namespace SchoolManagment.Services
{
    public class StudentService : IStudentService
    {
        private readonly IStudentRepo studentRepo;

        public StudentService(IStudentRepo _studentRepo)
        {
            this.studentRepo = _studentRepo;

        }

        public PagedList<Student> GetStudents(StudentParameters pagingParameter)
        {
            return studentRepo.GetStudents(pagingParameter);

        }

        public Student InsertStudent(Student student)
        {
            return studentRepo.InsertStudent(student);

        }
    }
}
