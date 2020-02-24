using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TravelK300.Models;

namespace TravelK300.ViewModel
{
    public class homeVm
    {
        public List<TopSlider> topSlider { get; set; }
        public MoreInformation moreinfo { get; set; }
        public List<Service> services { get; set; }
        public List<AllTour> tourlist { get; set; }
        public AllTour tourSingle { get; set; }
        public List<OurTeam>ourteam { get; set; }
        public List<Gallery> galleries { get; set; }
        public List<DiscoverRight> disRight { get; set; }
    }
}