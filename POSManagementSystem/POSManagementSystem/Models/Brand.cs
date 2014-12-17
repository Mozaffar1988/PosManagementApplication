using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace POSManagementSystem.Models
{
    public class Brand
    {
        [Key]
        public int brandID { get; set; }

        public int categoryID { get; set; }
        [ForeignKey("categoryID")]
        public Category Category { get; set; }

        public string brandName { get; set; }
        public string createdDate { get; set; }
        public string updatedDate { get; set; }
        public string createdBy { get; set; }
    }
}