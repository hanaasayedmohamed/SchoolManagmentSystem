using SchoolManagment.Common;
using SchoolManagment.OAuthToken;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagment.Controllers
{
    [Route("OAuth")]
    [ApiController]

    public class OAuthController : ControllerBase
    {
        [HttpGet]
        [Route("Token")]
        [SchoolManagment.Authentication.BasicAuthorization] //New 
        public IActionResult GenerateToken( )
        {

                return Ok(new
                {
                    access_Token = JwtToken.GenerateToken(),
                    Token_Type = "bearer"
                });
  
        }
    }
}
