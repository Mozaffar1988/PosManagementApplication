using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace POSManagementSystem.Models
{
    public class Product
    {
        [Key]
        public int productID { get; set; }


        public int brandID { get; set; }
        [ForeignKey("brandID")]
        public Brand Brand { get; set; }

        public int productBarCode { get; set; }
        public string productName { get; set; }
        public int productPrice { get; set; }
        public string createdDate { get; set; }
        public string updatedDate { get; set; }
        public string createdBy { get; set; }
    }
}