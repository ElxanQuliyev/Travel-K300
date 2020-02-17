

AOS.init();

$('.mainSlider-all').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: 'linear'
});

$('.discover-all').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: 'linear'
});

$('.discovers').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: 'linear'
});


$(document).ready(function(){
  $('.tablinks').click(function(){
    $('.tablinks').removeClass("active");
    $(this).addClass("active");
});
});


$('.tour-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    autoplay: true,
    fade: true,
    autoplaySpeed: 1700,
});


// Slider //


// Slick Slider //




  $('.dest-all').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 600,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 4,
          autoplay: true,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  
// Slick Slider //





 

 function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



function openNavS() {
  document.getElementById("mySidenavS").style.width = "250px";
}

function closeNavS() {
  document.getElementById("mySidenavS").style.width = "0";
}


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



$(document).ready(function(){
  $('.your-class').slick({
    
  });
});






