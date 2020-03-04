$(function() {

    // Make Height To Carousel
    let winH = $(window).height();
    let upperNavH = $('.upper-nav').innerHeight();
    let navBar = $('.mynavbar').innerHeight();

    $('.mymain-carousel, .carousel-item').height(winH - (upperNavH + navBar));

    // Add Avtive To Idicators

    $('.carousel-indicators li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    })

    // Add Class Avtive To Button In Featured-work

    $('.featured-work button').click(function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

    // Make margin Top When Hoverd
    $('.pricing-table .card').hover(function() {

        $(this).animate({
            position: 'relative',
            top: '-20px'
        }, 400)

    }, function() {
        $(this).animate({
            position: 'relative',
            top: '0'
        }, 400)
    });

    // Add Padding To Links At Footer
    $('footer ul li span').hover(function() {
        $(this).animate({
            'padding-left': '5px'
        }, 200);

    }, function() {
        $(this).animate({
            'padding-left': '0'
        }, 200);
    });

    // Show Or Hide The Button Scrolled

    $(window).scroll(function() {

        if ($(this).scrollTop() > 400) {

            if ($('#scrolled').hasClass('hidden')) {

                $('#scrolled-top').parent().fadeIn('slow');

                $(this).parent().toggleClass('hidden');

            };

        } else {

            $('#scrolled-top').parent().fadeOut('slow');

            $(this).parent().toggleClass('hidden');

        };

    });

    // Scrolled To Top
    $('#scrolled-top').click(function() {

        $('body, html').animate({ scrollTop: 0 }, 800)

    });

});

$(document).ready(function() {

    // Add Class Avtive To Button
    $('.featured-work button:first-of-type').addClass('active');

    // Show Nice Overlay When Hover On Img
    $('.featured-work #father-mix .img-box').hover(function() {
        $(this).children('.info').fadeIn(400);

    }, function() {
        $(this).children('.info').fadeOut(400);
    });

    // Scrolled To Scetion
    $('.mynavbar .navbar-collapse ul li a').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $($(this).data('to')).offset().top
        }, 800)

    });


});