using SchoolManagment.Domain.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagment.Domain
{
    public class UserListDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
  
    }
}
