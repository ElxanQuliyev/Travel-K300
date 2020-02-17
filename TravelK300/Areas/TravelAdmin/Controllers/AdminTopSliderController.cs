using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using TravelK300.Models;

namespace TravelK300.Areas.TravelAdmin.Controllers
{
   
    public class AdminTopSliderController : Controller
    {
        TravelDB db = new TravelDB();
        // GET: TravelAdmin/AdminTopSlider
        public ActionResult Index()
        {
             
            return View(db.TopSliders.ToList());
        }
        public ActionResult Create()
        {

            return View();
        }

        [HttpPost]
        public ActionResult Create(TopSlider slider,HttpPostedFileBase SliderPhoto)
        {
            if (ModelState.IsValid)
            {
                if (SliderPhoto != null)
                {
                    if (SliderPhoto.ContentLength > 0)
                    {
                        if(SliderPhoto.ContentType.ToLower()=="image/jpg" ||
                            SliderPhoto.ContentType.ToLower() == "image/png" ||
                            SliderPhoto.ContentType.ToLower() == "image/gif" ||
                            SliderPhoto.ContentType.ToLower() == "image/jpeg" ||
                            SliderPhoto.ContentType.ToLower() == "image/bmp"

                            )
                        {
                            WebImage img = new WebImage(SliderPhoto.InputStream);
                            FileInfo flInfo = new FileInfo(SliderPhoto.FileName);
                            string filename = "Slider" + Guid.NewGuid() + flInfo.Extension;
                            img.Save("~/Uploads/SliderPhoto/" + filename);
                            slider.SliderPhoto = "/Uploads/SliderPhoto/" + filename;
                            db.TopSliders.Add(slider);
                            db.SaveChanges();
                        }


                    }

                 
                }
                
                return RedirectToAction("index","");
            }
            return View();
        }
        public ActionResult Edit(int? id)
        {
            if (id == null) return HttpNotFound();
            TopSlider selectedSlider = db.TopSliders.FirstOrDefault(tp => tp.Id == id);
            if (selectedSlider == null) return HttpNotFound();
            return View(selectedSlider);
        }
        [HttpPost]
        public ActionResult Edit(int? id,TopSlider slider,HttpPostedFileBase SliderPhoto)
        {
            if (ModelState.IsValid)
            {
                TopSlider selectedSlider = db.TopSliders.FirstOrDefault(tp => tp.Id == id);

                if (SliderPhoto != null)
                {

                    if (SliderPhoto.ContentLength > 0)
                    {
                        if (SliderPhoto.ContentType.ToLower() == "image/jpg" ||
                            SliderPhoto.ContentType.ToLower() == "image/png" ||
                            SliderPhoto.ContentType.ToLower() == "image/gif" ||
                            SliderPhoto.ContentType.ToLower() == "image/jpeg" ||
                            SliderPhoto.ContentType.ToLower() == "image/bmp"

                            )
                        {

                            if (System.IO.File.Exists(Server.MapPath(selectedSlider.SliderPhoto)))
                            {
                                System.IO.File.Delete(Server.MapPath(selectedSlider.SliderPhoto));
                            }

                            WebImage img = new WebImage(SliderPhoto.InputStream);
                            FileInfo flInfo = new FileInfo(SliderPhoto.FileName);
                            string filename = "Slider" + Guid.NewGuid() + flInfo.Extension;
                            img.Save("~/Uploads/SliderPhoto/" + filename);
                            slider.SliderPhoto = "/Uploads/SliderPhoto/" + filename;
                            db.TopSliders.Add(slider);
                            db.SaveChanges();
                        }


                    }
                }
                    selectedSlider.Header = slider.Header;
                selectedSlider.Description = slider.Description;
                selectedSlider.SliderPhoto = slider.SliderPhoto;
                db.SaveChanges();
                return RedirectToAction("index");

            }
            
            return View();
        }


    }
}