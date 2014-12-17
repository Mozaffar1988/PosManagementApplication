using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace POSManagementSystem.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string userName { get; set; }

        [DataType(DataType.Password)]
        public string password { get; set; }

        public string userRole { get; set; }
        public string createdDate { get; set; }
        public string updatedDate { get; set; }
        public string createdBy { get; set; }
    }
}