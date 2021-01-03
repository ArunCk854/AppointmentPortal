using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AppointmentAPI.Models
{
    public class AppointmentDetail
    {
        [Key]
        public int AppointmentDetailId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string FullName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Gender { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Age { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Department { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string DoctorName { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string AppointmentDate { get; set; }
    }
}
