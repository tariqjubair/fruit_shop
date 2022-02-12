
// ==== jQuery ====

$(function () {

// ==== ==== Header: menu_top keyframe ==== ====

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $(".navbar").addClass("ext_hd");
            $(".navbar .container").addClass("cont_pd");
            $(".navbar-nav .nav-link").css("margin-left", "50px");
        } 
        else {
            $(".navbar").removeClass("ext_hd");
            $(".navbar .container").removeClass("cont_pd");
            $(".navbar-nav .nav-link").css("margin-left", "");
        }
    });

// ==== ==== Banner_Top: ban_top_slider

	$('.ban_top_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		rtl: true,
		autoplaySpeed: 3000,
        speed: 1000,
		arrows: false,
		fade: false,
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
	});

// ==== ==== Our_Products: venobox image ==== ====

    $('.venobox').venobox();   

// ==== ==== Banner_Mid: ban_mid_slider

    $('.ban_mid_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
        fade: false,
        responsive: [
            {
                breakpoint: 992, // tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

// ==== ==== Counter_Part: counter_up ==== ====

    $('.counter').counterUp({
        delay: 20,
        time: 3000
    });

// ==== ==== Banner_Btm: ban_btm_slider

    $('.ban_btm_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
        fade: true,
        fadeSpeed: 1000,
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

// ==== ==== Pricing_Table: prc_slider ==== ====

    $('.prc_slider').slick({
        slidesToShow: 3,
        autoplay: false,
        arrows: false,
        fade: false,
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '50px',
                }
            }
        ]
    });

// ==== ==== Footer_Two: foot_slider

    $('.foot_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 3000,
        speed: 1000,
        arrows: false,
        fade: false,
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
  















});