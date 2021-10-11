/* eslint-disable no-undef */
(function($) {
  
  "use strict";  

  $('#preloader').fadeOut();
  $(window).on('load', function() {

    if ($('.typed').length) {
      var typed_strings = $(".typed").data('typed-items');
      typed_strings = typed_strings.split(',')
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        showCursor: false
      });
    }


    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })



    var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn("slow");
        } else {
          $('.back-to-top').fadeOut("slow");
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 1500, "easeInOutExpo");
        return false;
      });


//     //! Back to top button start
//    $(window).scroll(function() {
//     if ($(this).scrollTop() > 100) {
//       $('.back-to-top').fadeIn('slow');
//     } else {
//       $('.back-to-top').fadeOut('slow');
//     }
//   });

//   $('.back-to-top').click(function() {
//     $('html, body').animate({
//       scrollTop: 0
//     }, 1500, 'easeInOutExpo');
//     return false;
//   });

//  //! Back to top button end
  /*Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    // one page navigation 
    $('.navbar-nav').onePageNav({
      currentClass: 'active'
    });

    /* Auto Close Responsive Navbar on Click
    ========================================================*/
    // function close_toggle() {
    //     if ($(window).width() <= 768) {
    //         $('.navbar-collapse a').on('click', function () {
    //             $('.navbar-collapse').collapse('hide');
    //         });
    //     }
    //     else {
    //         $('.navbar .navbar-inverse a').off('click');
    //     }
    // }
    // close_toggle();
    // $(window).resize(close_toggle);

    /* WOW Scroll Spy
    ========================================================*/
    //  var wow = new WOW({
    //   //disabled for mobile
    //     mobile: false
    // });

    // wow.init();    

     /* Testimonials Carousel 
    ========================================================*/
    // var owl = $("#testimonials");
    //   owl.owlCarousel({
    //     loop: true,
    //     nav: false,
    //     dots: true,
    //     center: true,
    //     margin: 15,
    //     slideSpeed: 1000,
    //     stopOnHover: true,
    //     autoPlay: true,
    //     responsiveClass: true,
    //     responsiveRefreshRate: true,
    //     responsive : {
    //         0 : {
    //             items: 1
    //         },
    //         768 : {
    //             items: 2
    //         },
    //         960 : {
    //             items: 3
    //         },
    //         1200 : {
    //             items: 3
    //         },
    //         1920 : {
    //             items: 3
    //         }
    //     }
    //   });  
      

    /* Back Top Link active
    ========================================================*/
      // var offset = 200;
      // var duration = 500;
      // $(window).scroll(function() {
      //   if ($(this).scrollTop() > offset) {
      //     $('.back-to-top').fadeIn("slow");
      //   } else {
      //     $('.back-to-top').fadeOut("slow");
      //   }
      // });

      // $('.back-to-top').on('click',function(event) {
      //   event.preventDefault();
      //   $('html, body').animate({
      //     scrollTop: 0
      //   }, 1500, "easeInOutExpo");
      //   return false;
      // });



      // $('.back-to-nav').on('click',function(event) {
      //   event.preventDefault();
      //   $('html, body').animate({
      //     scrollTop: 0
      //   }, 600);
      //   return false;
      // });


      $('.animate-scale').animatedHeadline({
            animationType: 'scale'
        });

        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        })





        // Testimonials carousel (uses the Owl Carousel library)
  $(".blog-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });


   

        // country code 
        
//         $(window).intlTelInput("#c_code", {
//   initialCountry: "auto",
//   geoIpLookup: function(callback) {
//     $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
//       var countryCode = (resp && resp.country) ? resp.country : "us";
//       callback(countryCode);
//     });
//   },
//   utilsScript: "../../build/js/utils.js?1613236686837" // just for formatting/placeholders etc
// });


  });    
    
 // eslint-disable-next-line no-undef
}(jQuery));