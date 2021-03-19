using SchoolManagment.Common;
using SchoolManagment.Domain;
using System;
using System.Collections.Generic;

namespace SchoolManagment.Services
{
    public interface IUserService
    {
        public UserDto Authenticate(AuthenticateRequest model);

        public List<UserListDto> GetAllUsers();
    }
}
