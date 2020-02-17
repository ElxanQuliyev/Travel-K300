using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TravelK300.Models;

namespace TravelK300.Controllers
{
    public class HomeController : Controller
    {
        TravelDB db = new TravelDB();
        public ActionResult Index()
        {
            ViewBag.slideTop = db.TopSliders.ToList();
            ViewBag.mInfo = db.MoreInformations.First();
            ViewBag.serviceList = db.Services.ToList();
            ViewBag.tours = db.AllTours.ToList();
            ViewBag.team = db.OurTeams.ToList();
            ViewBag.galery = db.Galleries.ToList();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}