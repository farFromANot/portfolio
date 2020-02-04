(function ($) {
    $(document).ready(function(){
      
      // hide .navbar first
      $(".navbar").hide();
      
      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
              // set distance user needs to scroll before we fadeIn navbar
              if ($(this).scrollTop() > 100) {
                  $('.navbar').fadeIn();
              } else {
                  $('.navbar').fadeOut();
              }
          });
  
      
      });
      let myArr = new Array("Full Stack Developer", "Beat Maker", "Creative", "Visionary", "Student", "Basketball Player", "Vinyl Collector");
        loop();

        function loop() 
        {
            $("#mySpan").slideUp(2000, function(){
                myArr.push(myArr.shift());

                $("#mySpan").empty();
                $("#mySpan").append(myArr[0]);
                $("#mySpan").show(300);

                loop();
            });
        }
  });
    }(jQuery));

