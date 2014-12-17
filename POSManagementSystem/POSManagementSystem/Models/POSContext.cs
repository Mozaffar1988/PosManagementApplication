using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace POSManagementSystem.Models
{
    public class POSContext : DbContext
    {
        public POSContext()
            : base("PosManagementSystem")
        { }

        public DbSet<User> Users { get; set; }
        public DbSet<Category> Categorys { get; set; }
        public DbSet<Brand> Brands { get; set; }

        public DbSet<Product> Products { get; set; }
       
    }
}