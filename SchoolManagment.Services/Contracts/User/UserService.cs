using SchoolManagment.Common;
using SchoolManagment.Domain;
using SchoolManagment.OAuthToken;
using SchoolManagment.Repo;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagment.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepo  userRepo;

        public UserService(IUserRepo _userRepo)
        {
            this.userRepo = _userRepo;
        }

        public UserDto Authenticate(AuthenticateRequest model)
        {
            var user = userRepo.Authenticate(model);

            // return null if user not found
            if (user == null) return null;

            // authentication successful so generate jwt token
            var token = JwtToken.GenerateToken(user);

            return new UserDto(user, token);
        }

        public List<UserListDto> GetAllUsers()
        {  //Todo Add automapping there 

            return null;
        }
    }
}
