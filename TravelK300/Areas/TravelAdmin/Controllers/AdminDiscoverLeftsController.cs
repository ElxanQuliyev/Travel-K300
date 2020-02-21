using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using TravelK300.Models;

namespace TravelK300.Areas.TravelAdmin.Controllers
{
    public class AdminDiscoverLeftsController : Controller
    {
        private TravelDB db = new TravelDB();

        // GET: TravelAdmin/AdminDiscoverLefts
        public ActionResult Index()
        {
            return View(db.DiscoverLefts.ToList());
        }

        // GET: TravelAdmin/AdminDiscoverLefts/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DiscoverLeft discoverLeft = db.DiscoverLefts.Find(id);
            if (discoverLeft == null)
            {
                return HttpNotFound();
            }
            return View(discoverLeft);
        }

        // GET: TravelAdmin/AdminDiscoverLefts/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: TravelAdmin/AdminDiscoverLefts/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Photo")] DiscoverLeft discoverLeft, HttpPostedFileBase LeftPhoto)
        {
            if (ModelState.IsValid)
            {
                if (LeftPhoto != null)
                {
                    if (LeftPhoto.ContentType.ToLower() == "image/jpg" ||
                        LeftPhoto.ContentType.ToLower() == "image/png" ||
                        LeftPhoto.ContentType.ToLower() == "image/jpeg" ||
                        LeftPhoto.ContentType.ToLower() == "image/gif")
                    {
                        WebImage image = new WebImage(LeftPhoto.InputStream);
                        FileInfo info = new FileInfo(LeftPhoto.FileName);
                        string name = "DiscLeft-" + Guid.NewGuid() + info.Extension;
                        image.Save("~/Uploads/DiscoverLeft/" + name);
                        discoverLeft.Photo = "/Uploads/DiscoverLeft/" + name;

                        db.DiscoverLefts.Add(discoverLeft);
                        db.SaveChanges();
                        return RedirectToAction("Index");
                    }
                }
                
            }

            return View(discoverLeft);
        }

        // GET: TravelAdmin/AdminDiscoverLefts/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DiscoverLeft discoverLeft = db.DiscoverLefts.Find(id);
            if (discoverLeft == null)
            {
                return HttpNotFound();
            }
            return View(discoverLeft);
        }

        // POST: TravelAdmin/AdminDiscoverLefts/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Photo")] DiscoverLeft discoverLeft)
        {
            if (ModelState.IsValid)
            {
                db.Entry(discoverLeft).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(discoverLeft);
        }

        // GET: TravelAdmin/AdminDiscoverLefts/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DiscoverLeft discoverLeft = db.DiscoverLefts.Find(id);
            if (discoverLeft == null)
            {
                return HttpNotFound();
            }
            return View(discoverLeft);
        }

        // POST: TravelAdmin/AdminDiscoverLefts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            DiscoverLeft discoverLeft = db.DiscoverLefts.Find(id);
            db.DiscoverLefts.Remove(discoverLeft);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
