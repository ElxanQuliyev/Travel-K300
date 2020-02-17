using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TravelK300.Areas.TravelAdmin.Controllers
{
    public class HomeController : Controller
    {
        // GET: TravelAdmin/Home
        public ActionResult Index()
        {
            return View();
        }
    }
}