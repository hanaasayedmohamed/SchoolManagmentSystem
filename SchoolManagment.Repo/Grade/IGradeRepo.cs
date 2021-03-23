using SchoolManagment.Domain.Model;
using System;
using System.Collections.Generic;

namespace SchoolManagment.Repo
{
    public interface IGradeRepo
    {
        public List<Grade> GetAllGrades();
    }
}
