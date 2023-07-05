(function($) {

	'use strict';
	
	 // Header Sticky
     $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar').addClass("is-sticky");
        }
        else{
            $('.navbar').removeClass("is-sticky");
        }
    });
	
	// Preloader Area
	jQuery(window).on('load', function() {
	    $('.preloader').fadeOut();
	});

     // Navbar Menu JS
     $('.navbar .navbar-nav li a, .main-banner-content .btn, .cta-area .btn, .who-we-are .btn, .tabs_item_content .btn, .call-to-action-content .btn').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 80);
        e.preventDefault();
    });
    $('.navbar .navbar-nav li a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

	//odometer js
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    //AOS animation
    AOS.init({
        once: true,
        disable: function() {
        var maxWidth = 900;
        return window.innerWidth < maxWidth;
        }
    });

    //Partner-slider
    $('.partner-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2, 
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:6,
            },
                
        }
    });
    //Choose-slider
    $('.choose-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:true,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:5,
            },
                
        }
    });

    //Reviews-slider
    $('.reviews-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:false,
        center: true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            },
                
        }
    });

   //Reviews-slider
    $('.app-reviews-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:false,
        center: true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        items:1,
    });

    //Trasted Slider 
    $('.trasted-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2, 
            },
            768:{
                items:3,
            },
            992:{
                items:5,
            },
            1200:{
                items:5,
            },
                
        }
    });

    //Portfolio-slider
    $('.portfolio-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        center:true,
        stagePadding: 150,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        responsive:{
            0:{
                items:1,
                stagePadding: 0, 
            },
            768:{
                items:2,
                stagePadding: 0,
            },
            992:{
                items:3,
                stagePadding: 0,
            },
            1200:{
                items:3,
            },
                
        }
    });
    
    //Instagram-slider
    $('.instagram-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        center:true,
        stagePadding: 150,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:3,
            },
            992:{
                items:5,
            },
            1200:{
                items:5,
            },
                
        }
    });

    //Testimonial-slider
    $('.agency-testimonial-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:2,
            },
            1200:{
                items:2,
            },
                
        }
    });
    
    //Services-slider
    $('.services-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:2,
            },
            1200:{
                items:3,
            },
                
        }
    });
    //Team-slider
    $('.agency-team-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            },
                
        }
    });

    //Team-slider
    $('.consulting-partner-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2, 
            },
            768:{
                items:3,
            },
            992:{
                items:5,
            },
            1200:{
                items:7,
            },
        }
    });

    //Services-slider
    $('.consulting-services-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            },
                
        }
    });
    //Project-slider
    $('.consulting-project-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        center:true,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            },
                
        }
    });
    //Testimonial-slider
    $('.consulting-testimonial-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        center:true,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            },
                
        }
    });
    //Testimonial-slider
    $('.photograpy-testimonial-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:2,
            },
            1200:{
                items:2,
            },
                
        }
    });
    //Project-slider
    $('.photography-banner-img').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        items:1,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
    });

    //Project-slider
    $('.political-project-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:true,
        center:true,
        stagePadding: 250,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1, 
                stagePadding: 0,
            },
            768:{
                items:2,
                stagePadding: 0,
            },
            992:{
                items:3,
                stagePadding: 0,
            },
            1200:{
                items:3,
            },
                
        }
    });

    //Testimonial-slider
    $('.political-testimonial-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:2,
            },
            1200:{
                items:2,
            },
                
        }
    });

    //tranding-slider
    $('.tranding-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            },
                
        }
    });

    //Live Action-slider
    $('.live-action-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow-1'></i>"
        ],
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            },
                
        }
    });

    //Testimonials-slider
    $('.exchange-testimonials-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:true,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1, 
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:3,
            },
                
        }
    });

    //Partner-slider
    $('.exchange-partners-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        dots:false,
        autoplay:true,
        smartSpeed: 1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2, 
            },
            768:{
                items:4,
            },
            992:{
                items:5,
            },
            1200:{
                items:7,
            },
                
        }
    });

    // FAQ Accordion
	$('.accordion').find('.accordion-title').on('click', function(){
		$(this).toggleClass('active');
		$(this).next().slideToggle('fast');
		$('.accordion-content').not($(this).next()).slideUp('fast');
		$('.accordion-title').not($(this)).removeClass('active');		
	});

	// Subscribe form JS
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
        // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter, #validator-newsletter-2").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter, #validator-newsletter-2").removeClass().addClass(msgClasses).text(msg);
    }

    // Tabs
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);

    // Particles JS
    if(document.getElementById("particles-js")) particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 110,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.6,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


    // Pricing Switcher
	let el = document.getElementById('filt-monthly');
	if(el){
		let e = document.getElementById("filt-monthly"),
		d = document.getElementById("filt-yearly"),
		t = document.getElementById("switcher"),
		m = document.getElementById("monthly"),
		y = document.getElementById("yearly");
		e.addEventListener("click", function(){
			t.checked = false;
			e.classList.add("toggler--is-active");
			d.classList.remove("toggler--is-active");
			m.classList.remove("hide");
			y.classList.add("hide");
		});
		d.addEventListener("click", function(){
			t.checked = true;
			d.classList.add("toggler--is-active");
			e.classList.remove("toggler--is-active");
			m.classList.add("hide");
			y.classList.remove("hide");
		});
		t.addEventListener("click", function(){
			d.classList.toggle("toggler--is-active");
			e.classList.toggle("toggler--is-active");
			m.classList.toggle("hide");
			y.classList.toggle("hide");
		});
	}

    // Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Count Time 
	function makeTimer() {
		var endTime = new Date("September 20, 2023 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 0);
    
    // Live Auctions Countdown
	$('.live-auctions-countdown').downCount({
		date: '08/27/2023 12:00:00',
		offset: -5
	}, function () {
		alert('WOOT WOOT, done!');
	});

    // MixItUp Shorting
    $(function(){
        $('.shorting').mixItUp();
    });

    // AJAX MailChimp JS
    $(".newsletter-form").ajaxChimp({
        url: "https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    //* magnific popup
	$(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 100,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

    $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] 
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

	// Go to Top
    $(window).on('scroll', function(){
        var scrolled = $(window).scrollTop();
        if (scrolled > 300) $('.go-top').addClass('active');
        if (scrolled < 300) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function() {
        $("html, body").animate({ scrollTop: "0" },  500);
    });

    
})(jQuery);
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('mala_theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('mala_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('mala_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();