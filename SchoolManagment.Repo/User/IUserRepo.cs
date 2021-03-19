using SchoolManagment.Common;
using SchoolManagment.Domain;
using SchoolManagment.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagment.Repo
{
    public interface IUserRepo
    {
        public User Authenticate(AuthenticateRequest model);
        public List<User> GetAllUsers();
    }
}
