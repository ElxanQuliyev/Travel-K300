
$(document).ready(function () {
    $('.hoverBtn').click(function() {
    $('html, body').animate({
      scrollTop: $(".middle").offset().top
    }, 1000)
  }), 
    $('.hoverBtn2').click(function (){
      $('html, body').animate({
        scrollTop: $(".elaqemiz").offset().top
      }, 1000)
    }),
    $('.bottom').click(function (){
      $('html, body').animate({
        scrollTop: $(".huseyn").offset().top
      }, 1000)
    })
  });
  