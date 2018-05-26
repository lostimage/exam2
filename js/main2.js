;(function($) {
	"use strict";
	var slide = document.querySelectorAll('ba-news__slide');
	var slider = $('.ba-news__slider').slick({
		  arrows:true,
		  dots:true,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow:('.icon-cheveron-outline-left'),
          nextArrow:('.icon-cheveron-outline-right'),
          slide:('.ba-news__slide'),
          autoplay: true,
          autoplaySpeed: 5000,
        appendDots:('.ba-news')
		 
      });
     
    })(jQuery);
