using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AppointmentAPI.Models
{
    public class DoctorDetail
    {
        [Key]
        public int DoctorDetailId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string DoctorName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Department { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string PhoneNumber { get; set; }



    }
}
