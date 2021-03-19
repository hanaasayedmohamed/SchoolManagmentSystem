using SchoolManagment.Common;
using SchoolManagment.Domain;
using SchoolManagment.Domain.Model;
using SchoolManagment.EF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SchoolManagment.Repo
{
    public class UserRepo : IUserRepo
    {
        private readonly FirstCoreAppDbContext _dbContext;

        public UserRepo(FirstCoreAppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public User Authenticate(AuthenticateRequest model)
        {
            return _dbContext.users.FirstOrDefault(C => C.Username == model.Username && C.Password == model.Password);
        }

        public List<User> GetAllUsers()
        {
            return _dbContext.users.ToList();
        }
    }
}
