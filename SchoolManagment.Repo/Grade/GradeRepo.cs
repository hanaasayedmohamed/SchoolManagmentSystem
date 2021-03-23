using SchoolManagment.Domain.Model;
using SchoolManagment.EF;
using System.Collections.Generic;
using System.Linq;

namespace SchoolManagment.Repo
{
    public class GradeRepo : IGradeRepo
    {
        private readonly FirstCoreAppDbContext _dbContext;
        public GradeRepo(FirstCoreAppDbContext dbContext )
        {
            _dbContext = dbContext;

        }

        public List<Grade> GetAllGrades()
        {
           return  _dbContext.Grades.ToList();
            
        }
    }
}
