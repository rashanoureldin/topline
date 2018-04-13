$(document).ready(function() {
 
   $("#owl-clients").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 6,
      itemsDesktop : [1199,6],
      itemsDesktopSmall : [979,3]
 
  });
    // $('.topline-nav .main-navbar').onePageNav();

    $("#owl-testimonials").owlCarousel({
      autoPlay: 3000,
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });
   

   $("#owl-tweets").owlCarousel({
      autoPlay: 3000,
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  }); 

  $('.carousel').carousel({
        interval: 3000
    });
   $('.counter-count').counterUp({
                delay: 10,
                time: 1000
    });
   
   $("#sticker").sticky({topSpacing:0});
   
    $("#owl-demo2").owlCarousel({
 
      nav: false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      items:1,
      dots:false,
      rtl:true
  });
  $(".owl2-custom-next").click(function(){
        $('#owl-demo2').trigger('next.owl.carousel');
        return false;
    });
  $(".owl2-custom-prev").click(function(){
      $('#owl-demo2').trigger('prev.owl.carousel');
      return false;
  });

// _________________________________  
$(function() {
        $(' #da-thumbs > div ').each( function() { $(this).hoverdir({
          hoverDelay : 75
        }); });
      });

$('#portfolio .more').on('click', function(event) {
          event.preventDefault();

          var href = $(this).attr('href') + '.single-project',
              portfolioList = $('#portfolio-list'),
              content = $('#loaded-content');

          portfolioList.animate({'marginLeft':'120%'},{duration:400,queue:false});
          portfolioList.fadeOut(400);
          setTimeout(function(){ $('#loader').show(); },400);
          setTimeout(function(){
              content.load(href, function() {
                  $('#loaded-content meta').remove();
                  $('#loader').hide();
                  content.fadeIn(600);
                   $('html, body').animate({
                      scrollTop: $('#portfolio').offset().top
                  }, 1000);
                  $('#back-button').fadeIn(600);
              });
          },800);

  });

$('#back-button').on('click', function(event) {
          event.preventDefault();

          var portfolioList = $('#portfolio-list')
              content = $('#loaded-content');

          content.fadeOut(400);
          $('#back-button').fadeOut(400);
          setTimeout(function(){
              portfolioList.animate({'marginLeft':'0'},{duration:400,queue:false});
              portfolioList.fadeIn(600);
              $('html, body').animate({
                  scrollTop: $('#portfolio').offset().top
              }, 1000);
          },800);
  });

 $('[data-toggle="tooltip"]').tooltip();
    var $container = $('.da-thumbs').isotope({
     itemSelector: '.item',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: 225
        }
    });

  // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    // bind filter button click
    $('#filters').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $container.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });


    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        }
      }
    );
    wow.init();
// ------------------------------------ 
});

// $(window).scroll(function(){
//     $(this).scrollTop() >= 650 ? $(".topline-nav").css("background","#000") : $(".topline-nav").css("background","transparent");
//     $(this).scrollTop() >= 650 ? $(".topline-nav").css("margin-top","0px") : $(".topline-nav").css("margin-top","40px");
// });

 $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

     var $nav = $('#sticky-navbar');
var $nav2 = $('#main-navbar');
$nav.onePageNav();
$nav2.on('click', 'a.uri', function(e) {
var currentPos = $(this).parent().prevAll().length;
$nav.find('li').eq(currentPos).children('a').trigger('click');
e.preventDefault();
});

      (function($) { "use strict";


    /* Nice Scroll */

   jQuery("html").niceScroll({
      scrollspeed: 60,
      mousescrollstep: 38,
      cursorwidth: 8,
      cursorborder: 0,
      cursorcolor: '#001d34',
      autohidemode: true,
      zindex: 9999999,
      horizrailenabled: false,
      cursorborderradius: 10,
    });

    //#contact-us & #ask-salesman
    if(jQuery('#ask_salesman_btn').length > 0){
        jQuery('#ask_salesman_btn').click(function(){
            jQuery('#contact-us').hide("slide", { direction: "right" }, 1000);
            jQuery('#ask-salesman').show("slide", { direction: "right" }, 1000);
            return false;
        });
        
        //#contactus_btn
        jQuery('#contactus_btn').click(function(){
            jQuery('#ask-salesman').hide("slide", { direction: "right" }, 1000);
            jQuery('#contact-us').show("slide", { direction: "right" }, 1000);
            return false;
        });
        jQuery('#contactus_btn').trigger('click');
    }
    
    

})(jQuery);