using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace POSManagementSystem.Models
{
    public class Busket
    {
        [Key]
        public int productID { get; set; }
        public int productBarCode { get; set; }
        public string productName { get; set; }
        public int productPrice { get; set; }
        public string createdDate { get; set; }
        public string updatedDate { get; set; }
        public string createdBy { get; set; }
    }
}