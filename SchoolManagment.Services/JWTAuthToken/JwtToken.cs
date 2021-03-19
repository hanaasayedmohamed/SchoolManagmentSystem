using SchoolManagment.Domain.Model;
//using Microsoft.AspNetCore.Authentication.JwtBearer;
//using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace SchoolManagment.OAuthToken
{
    public static class JwtToken
    {
        public static string GenerateToken(User user)
        {
            var symmetricKey = "minimumSixteenCharacters"; 

            var tokenHandler = new JwtSecurityTokenHandler();
          
            var now = DateTime.UtcNow;
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                        new ClaimsIdentity(
                                new List<Claim>
                                {
                                    new Claim("UserId",user.UserId.ToString()),
                                    new Claim("UserName",user.Username),
                                    new Claim("fullname",user.FirstName + user.LastName) ,
                                }
                            )
                    ),
                 
                Expires = now.AddHours(Convert.ToInt32("1")),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.ASCII.GetBytes(symmetricKey)),
                    SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));

            return token;
        }
      
    }
}