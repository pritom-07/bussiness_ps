$(document).ready(function () {
    //  nav menu click
    $(".navbar .navlist ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    //  portfolio menu click
    $("#portfolio .portfolio-content .port-menu ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    //  nav menu fixed & back to top button
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 50) {
            $("nav").addClass("active-nav");
            
            $(".back-to-top").fadeIn();

        } 

        
        else {
            $("nav").removeClass("active-nav");
            $(".navlist ul li.home").addClass("active").siblings().removeClass("active");
            $(".back-to-top").fadeOut();
        }
    });

    // back to top button

    $(".back-to-top").click(function () {
        $("body,html").scrollTop({
                top: 0,
            },
            1500
        );
    });

    // banner slider area
    $(".banner-slider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="slick-prev fa fa-chevron-left prev_arrow" aria-hidden="true"></i>',
        nextArrow: ' <i class="slick-next fa fa-chevron-right next_arrow" aria-hidden="true"></i>',
        dots: true,
    });

    // portfolio  filter area
    var mixer = mixitup(".portfolio-img");

    // testimonials slide area

    $(".test-item").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });
});