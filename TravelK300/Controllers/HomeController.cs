using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TravelK300.Models;
using TravelK300.ViewModel;

namespace TravelK300.Controllers
{
    public class HomeController : Controller
    {
        TravelDB db = new TravelDB();
        public ActionResult Index()
        {
            //ViewBag.slideTop = db.TopSliders.ToList();
            //ViewBag.mInfo = db.MoreInformations.First();
            //ViewBag.serviceList = db.Services.ToList();
            //ViewBag.tours = db.AllTours.OrderByDescending(pr=>pr.Id).Take(3).ToList();
            //ViewBag.team = db.OurTeams.ToList();
            //ViewBag.galery = db.Galleries.ToList();
            //ViewBag.DisRight = db.DiscoverRights.ToList();
            var vm = new homeVm
            {
                topSlider = db.TopSliders.ToList(),
                moreinfo = db.MoreInformations.First(),
                services = db.Services.ToList(),
                tourlist = db.AllTours.OrderByDescending(pr => pr.Id).Take(3).ToList(),
                ourteam = db.OurTeams.ToList(),
                galleries = db.Galleries.ToList(),
                disRight = db.DiscoverRights.ToList()
            };
            return View(vm);
        }

        
        public ActionResult TourDetail(int? id)
        {   
            if (id == null) return HttpNotFound();
            AllTour trDetail = db.AllTours.FirstOrDefault(tr => tr.Id == id);
            if (trDetail == null) return HttpNotFound();

            var vm = new homeVm
            {
                tourSingle = trDetail,
                tourlist = db.AllTours.OrderByDescending(tr => tr.Id).Take(4).ToList(),
            };
            return View(vm);
        }
        public ActionResult Incomming()
        {
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