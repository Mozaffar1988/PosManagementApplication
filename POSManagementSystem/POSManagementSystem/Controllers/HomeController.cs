using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using POSManagementSystem.Models;

namespace POSManagementSystem.Controllers
{
    public class HomeController : Controller
    {
        private POSContext db = new POSContext();

        public ActionResult Index()
        {
            return View(db.Products.ToList());
        }

        public ActionResult GetProductID(int id = 0)
        {
            Product product = db.Products.Find(id);
            return View(product);
        }

        public ActionResult ProductBusket(int id = 0)
        {
            Product product = db.Products.Find(id);
            return View(product);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
