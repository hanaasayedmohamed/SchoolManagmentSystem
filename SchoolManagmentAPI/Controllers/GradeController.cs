using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SchoolManagment.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolManagmentAPI.Controllers
{
    [ApiController]
    [Route("Grade")]
    public class GradeController : ControllerBase
    {
        private IGradeService _gradeService;

        public GradeController(IGradeService  gradeService)
        {
            _gradeService = gradeService;
        }

        [Authorize]
        [HttpGet]
        [Route("GetAllGrades")]
        public IActionResult GetAllGrades()
        {
            var users = _gradeService.GetAllGrades();
            return Ok(users);
        }
    }
}
