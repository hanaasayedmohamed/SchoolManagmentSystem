using SchoolManagment.Domain;
using System.Collections.Generic;

namespace SchoolManagment.Services
{
    public interface IGradeService
    {
        public List<GradeDto> GetAllGrades();
    }
}
