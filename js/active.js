(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#oneMusicNav').classyNav();
    }

    // :: 3.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-slides');
        var testimonials = $('.testimonials-slide');
        var albumSlides = $('.albums-slideshow');

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        testimonials.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            dots: false,
            autoplay: true
        });

        albumSlides.owlCarousel({
            items: 5,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 750,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    // :: 4.0 Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.oneMusic-albums').imagesLoaded(function () {
            // filter items on button click
            $('.catagory-menu').on('click', 'a', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.oneMusic-albums').isotope({
                itemSelector: '.single-album-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single-album-item'
                }
            });
        });
    }

    // :: 5.0 Video Active Code
    if ($.fn.magnificPopup) {
        $('.video--play--btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    // :: 6.0 ScrollUp Active Code
    // if ($.fn.scrollUp) {
    //     browserWindow.scrollUp({
    //         scrollSpeed: 1500,
    //         scrollText: '<i class="fa fa-angle-up"></i>'
    //     });
    // }

    // :: 7.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 8.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".oneMusic-main-menu").sticky({
            topSpacing: 0
        });
    }

    // :: 9.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('#circle').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#000000',
            thickness: '3',
            reverse: true
        });
        $('#circle2').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#000000',
            thickness: '3',
            reverse: true
        });
        $('#circle3').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#000000',
            thickness: '3',
            reverse: true
        });
        $('#circle4').circleProgress({
            size: 160,
            emptyFill: "rgba(0, 0, 0, .0)",
            fill: '#000000',
            thickness: '3',
            reverse: true
        });
    }

    // :: 10.0 audioPlayer Active Code
    if ($.fn.audioPlayer) {
        $('audio').audioPlayer();
    }

    // :: 11.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    // :: 12.0 prevent default a click
    $('a[href="#"]').on('click', function ($) {
        $.preventDefault();
    });

    // :: 13.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }
    
    // :: 14.0 Gallery Menu Active Code
    $('.catagory-menu a').on('click', function () {
        $('.catagory-menu a').removeClass('active');
        $(this).addClass('active');
    })

})(jQuery);

$("li").mouseover(function(){
    $(this).find('.drop-down').slideDown(300);
    $(this).find(".accent").addClass("animate");
    $(this).find(".item").css("color","#fff");
    }).mouseleave(function(){
    $(this).find(".drop-down").slideUp(300);
    $(this).find(".accent").removeClass("animate");
    $(this).find(".item").css("color","#000");
    });
      window.onload = function () {
        slideOne();
        slideTwo();
        slideOnee();
        slideTwoo();
      };
      
      let sliderOne = document.getElementById("slider-1");
      let sliderTwo = document.getElementById("slider-2");
      let displayValOne = document.getElementById("range1");
      let displayValTwo = document.getElementById("range2");
      let minGap = 0;
      let sliderTrack = document.querySelector(".slider-track");
      let sliderMaxValue = document.getElementById("slider-1").max;
      ///////////
      let sliderOnee = document.getElementById("slider-11");
      let sliderTwoo = document.getElementById("slider-22");
      let displayValOnee = document.getElementById("range11");
      let displayValTwoo = document.getElementById("range22");
      let sliderTrackk = document.querySelector(".slider-trackk");
      let sliderMaxValuee = document.getElementById("slider-11").max;
      
      function slideOne() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        displayValOne.textContent = sliderOne.value;
        fillColor();
      }
      function slideOnee() {
        if (parseInt(sliderTwoo.value) - parseInt(sliderOnee.value) <= minGap) {
          sliderOnee.value = parseInt(sliderTwoo.value) - minGap;
        }
        displayValOnee.textContent = sliderOnee.value;
        fillColorr();
      }
      function slideTwo() {
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
          sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        displayValTwo.textContent = sliderTwo.value;
        fillColor();
      }
      function slideTwoo() {
        if (parseInt(sliderTwoo.value) - parseInt(sliderOnee.value) <= minGap) {
          sliderTwoo.value = parseInt(sliderOnee.value) + minGap;
        }
        displayValTwoo.textContent = sliderTwoo.value;
        fillColorr();
      }
      function fillColor() {
        percent1 = (sliderOne.value / sliderMaxValue) * 100;
        percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #000 ${percent1}% , #000 ${percent2}%, #dadae5 ${percent2}%)`;
      }
      function fillColorr() {
        percent11 = (sliderOnee.value / sliderMaxValuee) * 100;
        percent22 = (sliderTwoo.value / sliderMaxValuee) * 100;
        sliderTrackk.style.background = `linear-gradient(to right, #dadae5 ${percent11}% , #000 ${percent11}% , #000 ${percent22}%, #dadae5 ${percent22}%)`;
      }
      
     //////////
     const clearIcon = document.querySelector(".clear-icon");
     const searchBar = document.querySelector(".search");
   
     searchBar.addEventListener("keyup", () => {
       if(searchBar.value && clearIcon.style.visibility != "visible"){
         clearIcon.style.visibility = "visible";
       } else if(!searchBar.value) {
         clearIcon.style.visibility = "hidden";
       }
     });
   
     clearIcon.addEventListener("click", () => {
       searchBar.value = "";
       clearIcon.style.visibility = "hidden";
     })

     //////////////////////////
     