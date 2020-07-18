new WOW().init();

//Pre loader



// $(selector).fadeOut(speed,easing,callback)

// speed:	Optional. Specifies the speed of the fading effect. Default value is 400 milliseconds
// Possible values: milliseconds ,"slow", "fast"

//easing:	Optional. Specifies the speed of the element in different points of the animation. Default value is "swing"
//Possible values:
//"swing" - moves slower at the beginning/end, but faster in the middle
// "linear" - moves in a constant speed

// callback	Optional. A function to be executed after the fadeOut() method is completed

$(window).on('load', function () {
    $('.load').fadeOut('slow');
})

//Nav menu

$('.open-menu').click(function () {
    $('.start-menu').removeClass('button-anim-close');
    $('.main-nav').removeClass('nav-anim-close');
    $('.start-menu').addClass('button-anim');
    $('.main-nav').addClass('nav-anim');
})

$('.close-menu').click(function () {
    $('.main-nav').removeClass('nav-anim');
    $('.start-menu').removeClass('button-anim');
    $('.main-nav').addClass('nav-anim-close');
    $('.start-menu').addClass('button-anim-close');
})

//smooth scroll
$(function () {
    $('a[href*=\\#]:not([href=\\#])').click(function () {
        $('.main-nav').removeClass('nav-anim');
        $('.start-menu').removeClass('button-anim');
        $('.main-nav').addClass('nav-anim-close');
        $('.start-menu').addClass('button-anim-close');


        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000); // The number here represents the speed of the scroll in milliseconds
                return false;
            }
        }
    })
})

//filtering gallery images
$(document).ready(function () {
    $('.button').click(function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active')
        var name = $(this).attr('data-filter');
        if (name == 'all') {
            $('.filter').show(400)
        } else {
            // $(`.${name}`).show(2000)
            $('.filter').not('.' + name).hide(500);
            $('.filter').filter('.' + name).show(500);

        }
    })
    
})


//gallery switching images
$('.gallery-image').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});