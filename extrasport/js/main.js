// burger

let headerNavMenu = document.querySelector('.header__nav-menu');
let headerNavList = document.querySelector('.header__nav-line');
let headerList = document.querySelector('.header__list');
let body = document.querySelector('body');

headerNavMenu.addEventListener('click', function () {
    headerNavList.classList.toggle('active');
    headerList.classList.toggle('active');
    body.classList.toggle('active');
})

// burger

// slider start

var swiper = new Swiper(".gallery__slider", {
    slidesPerView: 4,
    // spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        620: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        1320: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

// slider start

// catalog tabs start

let catalogLinks = document.querySelectorAll('.catalog__link')

for (let i = 0; i < catalogLinks.length; i++) {
    catalogLinks[i].addEventListener('click', function () {
        for (let c = 0; c < catalogLinks.length; c++) {
            catalogLinks[c].classList.remove('active')
        }
        this.classList.add('active')
    })
}

// catalog tabs end


// fancybox

Fancybox.bind("[data-fancybox]", {
    infinite: false
});

// fancybox end