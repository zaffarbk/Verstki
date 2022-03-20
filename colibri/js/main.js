
$(document).ready(function () {

    // WOW animation

    new WOW().init();

    // Hamburger

    function hamburgerClose() {
        $('.header__hamburger').removeClass('js-open');
        $('#overlay').fadeOut(300);
        $('html, body').removeClass('js-overflow');
        $('.navbar').removeClass('js-nav-active');
    }

    $('.header__hamburger').on('click', function (event) {
        $(this).toggleClass('js-open');
        $('html, body').toggleClass('js-overflow');
        $('.navbar').toggleClass('js-nav-active');
        $('.popup__overlay').fadeOut(300);

        $('#overlay').click(function (event) {
            hamburgerClose();
        });

        if ($(this).hasClass('js-open')) {
            $('#overlay').fadeIn(200).css('z-index', '10');

            document.onkeydown = function (e) {
                if (e.keyCode == 27) {
                    hamburgerClose();

                    return false;
                }
            };

        } else {
            hamburgerClose()
        }

        if ($(window).width() <= 991) {
            $('.arrow-open__list').on('click', function (e) {
                e.preventDefault;
                $(this).toggleClass('active');
                $(this).next().toggleClass('active');
            });
        }
    });

    // Header


    $('#wrapper').css('paddingTop', $('.header').height());
    if ($(window).width() <= 991) {
        $('.header .navbar').css('top', $('.header').height());
    }


    window.addEventListener('scroll', () => {

        if ($(window).width() > 767) {
            if ($(window).scrollTop() > 50) {
                $('.header').addClass('js-header-fixed');
            } else {
                $('.header').removeClass('js-header-fixed');
            }
        }
    });

// Preloader

// $(window).on('load', function () {
//     setTimeout(function () {
//         $('.preloader').fadeOut(500);
//     }, 1500);
// });


    // Rotate screen (reload-page)

    window.addEventListener("orientationchange", function () {
        location.reload();
    }, false);


    // Swiper sliders

    let heroSwiper = new Swiper('.hero-swiper', {
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        breakpoints: {
            0: {},
        }
    });

    let gallerySwiper = new Swiper('.gallery-swiper', {
        centeredSlides: true,
        loop: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            stretch: -180,
            depth: 480,
            slideShadows: true,
        },
        slidesPerView: 'auto',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            // clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                stretch: 0,
                depth: 0,
            },
        }
    });


    // Block settings

    if ($('.news .news-item__wrap').length > 3) {
        $('.news .news-wrap').addClass('length-big-three')
    }


    if ($(window).width() <= 767) {

        $('.header-center .contacts .call-link').html('<svg width="18" height="18"><use xlink:href="#phone-outline"></use></svg>')

        $('.hero-swiper__item').parent().css({'maxWidth': '100%', 'flex': '0 0 100%'})
    }

});