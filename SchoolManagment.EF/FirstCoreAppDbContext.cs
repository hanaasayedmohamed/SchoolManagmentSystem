using SchoolManagment.Domain.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace SchoolManagment.EF
{
    public class FirstCoreAppDbContext: DbContext 
    {

        public FirstCoreAppDbContext(DbContextOptions<FirstCoreAppDbContext> options) : base(options )
        {
        }


        public DbSet<Student> Students { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<User> users { get; set; }

    }
}
