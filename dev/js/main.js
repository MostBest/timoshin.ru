$(document).ready(function(){
   $('.phone_with_ddd').mask('8 (000) 000-00-00');

   $('.reviews__slider').slick({
     arrows: false,
     dots: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     autoplay: true,
     autoplaySpeed: 2000,
   });

   $('.gallery__slider').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
   });

   $('[data-fancybox="gallery"]').fancybox({
   	// Options will go here
   });

});
