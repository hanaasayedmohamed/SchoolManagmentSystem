using SchoolManagment.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagment.Domain
{
    public class UserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }

        public string AuthenticationType { get; }

        public bool IsAuthenticated { get; }
        public UserDto()
        { 

        }
        public UserDto(User user, string token)
        {
            Id = user.UserId;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Username = user.Username;
            Token = token;
        }
    }
}
