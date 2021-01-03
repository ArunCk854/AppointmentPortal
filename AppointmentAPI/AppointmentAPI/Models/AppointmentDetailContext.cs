using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppointmentAPI.Models
{
    public class AppointmentDetailContext:DbContext
    {
        public AppointmentDetailContext(DbContextOptions<AppointmentDetailContext> options):base(options)
        {

        }

        public DbSet<DoctorDetail> DoctorDetails { get; set; }

        public DbSet<UserDetail> UserDetails { get; set; }

        public DbSet<AppointmentDetail> AppointmentDetails { get; set; }

    }
}
