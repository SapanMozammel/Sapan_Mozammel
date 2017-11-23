

    $(document).ready(function() {
     
      $("#Our_Team_Members").owlCarousel({
     
          autoPlay: 5000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          pagination : false,
          navigation : true,
    	    navigationText: [
      		  "<i class='fa fa-angle-left'></i>",
      		  "<i class='fa fa-angle-right'></i>"
      	  ],
          stopOnHover : true,

      });

      $(function(){
          $('.portfolio_area').mixItUp({
            animation: {
                effects: 'fade translateZ'
            }
          });
      });

    });

