$(document).ready(() => {
    setTimeout(adaptiveHeaderNav, 150);
    setTimeout(adaptiveFooterNav, 150);

    $(window).on('resize', adaptiveHeaderNav);
    $(window).on('resize', adaptiveFooterNav);

    Fancybox.bind("[data-fancybox]");

    $('input[type=tel]').inputmask({
        mask: '+7 (*{1}99) 999-99-99',
        placeholder: "+7 (___) ___-__-__",
        definitions: {
            '*': {
                validator: "[0-6,9]"
            }
        }
    });

    let mainSlider = new Swiper('.main-slider', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
        pagination: {
            el: ".main-slider .swiper-pagination",
            clickable: true,
            type: 'progressbar',
        },
    });

    let instructorsSlider = new Swiper('.instructors-slider', {
        slidesPerView: 1.2,
        navigation: {
            nextEl: '.instructors-slider+.slider-arrows .swiper-button-next',
            prevEl: '.instructors-slider+.slider-arrows .swiper-button-prev',
        },
        pagination: {
            el: ".instructors-slider .swiper-pagination",
            clickable: true,
            type: 'progressbar',
        },
        breakpoints: {
            992: {
                slidesPerView: 5
            },
            768: {
                slidesPerView: 2.5
            },
            576: {
                slidesPerView: 1.8
            }
        }
    });

    let reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 1.2,
        navigation: {
            nextEl: '.reviews-slider+.slider-arrows .swiper-button-next',
            prevEl: '.reviews-slider+.slider-arrows .swiper-button-prev',
        },
        pagination: {
            el: ".reviews-slider .swiper-pagination",
            clickable: true,
            type: 'progressbar',
        },
        breakpoints: {
            992: {
                slidesPerView: 5
            },
            768: {
                slidesPerView: 2.5
            },
            576: {
                slidesPerView: 1.8
            }
        }
    });

    let sliderPaginationRender = function(slider, sliderClass) {
        $(`.${sliderClass} .pagination__current`).html(`0${slider.activeIndex + 1}`);
        $(`.${sliderClass} .pagination__all`).html(`0${$(`.${sliderClass} .swiper-slide`).length}`);
    }

    sliderPaginationRender(mainSlider, 'main-slider');
    sliderPaginationRender(instructorsSlider, 'instructors-slider');
    sliderPaginationRender(reviewsSlider, 'reviews-slider');

    mainSlider.on('slideChange', function() {
        sliderPaginationRender(mainSlider, 'main-slider');
    });

    instructorsSlider.on('slideChange', function() {
        sliderPaginationRender(instructorsSlider, 'instructors-slider');
    });

    reviewsSlider.on('slideChange', function() {
        sliderPaginationRender(reviewsSlider, 'reviews-slider');
    });

    $('.header__burger-btn').on('click', () => {
        $('.burger').toggleClass('active');
    });
    
    $('.burger__close').on('click', () => {
        $('.burger').removeClass('active');
    });

    $('.menu__more>p').on('mouseenter', function() {
        $($(this).parent().children()[1]).addClass('active');
    });

    $('.menu__hidden').on('mouseleave', function() {
        setTimeout(()=>{$(this).removeClass('active')}, 500);
    });

    $(document).on('scroll', function() {
        if ($(window).scrollTop() >= 800) {
            $('.up').removeClass('up-invisible');
            $('.up').removeClass('up-invisible');
        } else {
            $('.up').addClass('up-invisible');
            $('.up').addClass('up-invisible');
        }
    });

    $('.up').on('click', () => {
        const body = $("html, body");
        body.animate({scrollTop:0}, 500, 'swing');
    });

    $.each($('.education .education__item'), function (i, v){
        $(this).hide();
    });
    var waypointEducation = new Waypoint({
        element: document.getElementById('education-wp'),
        handler: function(direction) {
            let n = 0;
            $.each($('.education .education__item'), function (i, v){
                $(this)
                    .show()
                    .css('animation-delay', n+ 's')
                    .addClass('animate__animated animate__backInUp');
                n+= .1;
            });
        },

        offset: 50
    });

    $.each($('.why .why__item'), function (i, v){
        $(this).hide();
    });
    var waypointWhy = new Waypoint({
        element: document.getElementById('why-wp'),
        handler: function(direction) {
            let n = 0;
            $.each($('.why .why__item'), function (i, v){
                $(this)
                    .show()
                    .css('animation-delay', n+ 's')
                    .addClass('animate__animated animate__backInUp');
                n+= .5;
            });
        },

        offset: 50
    });

    $.each($('.instructors .instructors__card'), function (i, v){
        $(this).hide();
    });
    var waypointInstructors = new Waypoint({
        element: document.getElementById('instructors-wp'),
        handler: function(direction) {
            let n = 0;
            $.each($('.instructors .instructors__card'), function (i, v){
                $(this)
                    .show()
                    .css('animation-delay', n+ 's')
                    .addClass('animate__animated animate__backInUp');
                n+= .3;
            });
        },

        offset: 50
    });

    $.each($('.stats .stats__item'), function (i, v){
        $(this).hide();
    });
    var waypointStats = new Waypoint({
        element: document.getElementById('stats-wp'),
        handler: function(direction) {
            let n = 0;
            $.each($('.stats .stats__item'), function (i, v){
                $(this)
                    .show()
                    .css('animation-delay', n+ 's')
                    .addClass('animate__animated animate__backInUp');
                n+= .5;
            });
        },

        offset: 50
    });

    $.each($('.reviews .reviews__card'), function (i, v){
        $(this).hide();
    });
    var waypointWhy = new Waypoint({
        element: document.getElementById('reviews-wp'),
        handler: function(direction) {
            let n = 0;
            $.each($('.reviews .reviews__card'), function (i, v){
                $(this)
                    .show()
                    .css('animation-delay', n+ 's')
                    .addClass('animate__animated animate__backInUp');
                n+= .3;
            });
        },

        offset: 50
    });

});

function adaptiveHeaderNav() {
    let windowWidth = $(window).width();

    do {
        let menuWidth = $('.header__logo').outerWidth()
            + (windowWidth - $('.header>.section-box').outerWidth())
            + $('.header__bottom>.menu').outerWidth()
            + $('.header__bottom>.socials').outerWidth()
            + 25
        ;

        if (menuWidth < windowWidth || !$('.header__bottom .menu>ul').children().length) {
            return false;
        }

        $('.header__bottom .menu>ul>li:last-child').prependTo($('.header__bottom .menu__hidden')); 
        $('.header__bottom .menu__more>p').addClass('active');
    }
    while(true);
}

function adaptiveFooterNav() {
    let windowWidth = $(window).width();

    do {
        let menuWidth = $('.header__logo').outerWidth()
            + (windowWidth - $('.footer>.section-box').outerWidth())
            + $('.footer__content>.menu').outerWidth()
            + $('.footer__contacts>.socials').outerWidth()
        ;

        if (menuWidth < windowWidth || !$('.footer__content .menu>ul').children().length) {
            return false;
        }

        $('.footer__content .menu>ul>li:last-child').prependTo($('.footer__content .menu__hidden')); 
        $('.footer__content .menu__more>p').addClass('active');
    }
    while(true);
}