using SchoolManagment.Common;
using SchoolManagment.Domain.Model;
using SchoolManagment.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;


namespace SchoolManagment.Controllers
{
    [ApiController]
    [Route("Students")]
    public class StudentsController : ControllerBase
    {
        IStudentService _studentService;
        private readonly ILogger<StudentsController> _logger;
        private readonly IMapper _mapper;

        public StudentsController(ILogger<StudentsController> logger, IStudentService studentService,
           IMapper mapper)
        {
            _studentService = studentService;
            _logger = logger;
            _mapper = mapper;

        }

        [HttpPost]
        [Authorize]
        [Route("InsertStudent")]
        public IActionResult InsertStudent([FromBody] Student student)
        {
            var students = _studentService.InsertStudent(student);
            return Ok(students);
        }

        [HttpGet]
        [Route("GetAllStudents")]
        [Authorize]
        public IActionResult GetAllStudents([FromQuery] StudentParameters parameters)
        {

            var students = _studentService.GetStudents(parameters);
            var studentsList = _mapper.Map<List<StudentDetail>>(students);
            var metadata = new
            {
                students.TotalCount,
                students.PageSize,
                students.CurrentPage,
                students.TotalPages,
                students.HasNext,
                students.HasPrevious
            };
            Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metadata));
            return Ok(studentsList);

        }

    }
}
