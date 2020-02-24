using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TravelK300.Models;

namespace TravelK300.Areas.TravelAdmin.Controllers
{
    public class AdminAccountController : Controller
    {
        TravelDB db = new TravelDB();
        // GET: TravelAdmin/AdminAccount
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(AdminSetting adm)
        {
            if(adm.AdminEmail!=string.Empty && adm.AdminPassword != string.Empty)
            {
                if (db.AdminSettings.Any(ad => ad.AdminEmail == adm.AdminEmail && 
                ad.AdminPassword==adm.AdminPassword))
                {
                    Session["ActiveAdmin"] = adm;
                    return RedirectToAction("index", "home");
                }

            }
            
            return View();
        }
        public ActionResult Logout()
        {
            Session["ActiveAdmin"] = null;
            return RedirectToAction("Login", "AdminAccount");
        }
    }
}