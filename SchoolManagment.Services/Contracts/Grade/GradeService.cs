using AutoMapper;
using SchoolManagment.Domain;
using SchoolManagment.Repo;
using System.Collections.Generic;

namespace SchoolManagment.Services
{
    public class GradeService : IGradeService
    {
        private readonly IMapper _mapper;

        private readonly IGradeRepo gradeRepo;

        public GradeService(IGradeRepo _gradeRepo, IMapper mapper)
        {
            this.gradeRepo = _gradeRepo;
            _mapper = mapper;

        }

        public List<GradeDto> GetAllGrades()
        {
            List<GradeDto> grades = new List<GradeDto>();

            foreach (var gradeitem in gradeRepo.GetAllGrades())
            {
                grades.Add(_mapper.Map<GradeDto>(gradeitem));
            }

            return grades;
        }
    }
}
