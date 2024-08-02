$(document).ready(() => {
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
        slidesPerView: 5,
        navigation: {
            nextEl: '.instructors-slider+.slider-arrows .swiper-button-next',
            prevEl: '.instructors-slider+.slider-arrows .swiper-button-prev',
        },
        pagination: {
            el: ".instructors-slider .swiper-pagination",
            clickable: true,
            type: 'progressbar',
        },
    });

    let reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 5,
        navigation: {
            nextEl: '.reviews-slider+.slider-arrows .swiper-button-next',
            prevEl: '.reviews-slider+.slider-arrows .swiper-button-prev',
        },
        pagination: {
            el: ".reviews-slider .swiper-pagination",
            clickable: true,
            type: 'progressbar',
        },
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
});