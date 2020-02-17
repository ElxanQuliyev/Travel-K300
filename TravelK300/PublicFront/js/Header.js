$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $("#MediaHeader").addClass(".active");
    } else {
       $("#MediaHeader").removeClass(".active");
    }
    
  });
  