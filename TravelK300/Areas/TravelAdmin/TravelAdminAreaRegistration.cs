using System.Web.Mvc;

namespace TravelK300.Areas.TravelAdmin
{
    public class TravelAdminAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "TravelAdmin";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "TravelAdmin_default",
                "TravelAdmin/{controller}/{action}/{id}",
                new { action = "Index",controller="home", id = UrlParameter.Optional },
                new string[] { "TravelK300.Areas.TravelAdmin.Controllers" }
                );
        }
    }
}