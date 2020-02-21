﻿using System;
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
            ViewBag.tours = db.AllTours.OrderByDescending(pr=>pr.Id).Take(3).ToList();
            ViewBag.team = db.OurTeams.ToList();
            ViewBag.galery = db.Galleries.ToList();
            ViewBag.DisRight = db.DiscoverRights.ToList();
            return View();
        }

        
        public ActionResult TourDetail(int? id)
        {   
            if (id == null) return HttpNotFound();
            AllTour trDetail = db.AllTours.FirstOrDefault(tr => tr.Id == id);
            if (trDetail == null) return HttpNotFound();
            ViewBag.tourSingle = trDetail;
            ViewBag.tourAll = db.AllTours.OrderByDescending(tr=>tr.Id).Take(4).ToList();
            return View();
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