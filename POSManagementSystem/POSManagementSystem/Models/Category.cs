using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace POSManagementSystem.Models
{
    public class Category
    {
        [Key]
        public int categoryID { get; set; }
        public string categoryName { get; set; }
        public string createdDate { get; set; }
        public string updatedDate { get; set; }
        public string createdBy { get; set; }
    }
}