using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace POSManagementSystem.Models
{
    public class Sales
    {
        [Key]
        public int salesID { get; set; }

        public int invoiceNo { get; set; }
        [ForeignKey("invoiceNo")]
        public Invoice Invoice { get; set; }

        public int busketID { get; set; }
        [ForeignKey("busketID")]
        public Busket Busket { get; set; }

        public string payType { get; set; }

        public string createdDate { get; set; }
        public string createdBy { get; set; }
    }
}