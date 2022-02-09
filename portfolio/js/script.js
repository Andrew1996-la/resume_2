//burger menu
const hamburgerBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu__close')
const itemMenu = document.querySelectorAll('.menu__item a');


hamburgerBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

closeMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
})

itemMenu.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
})

//skill percent

const percent = document.querySelectorAll('.competention__wrapper-bar-item-percent');
const lines = document.querySelectorAll('.competention__wrapper-bar-item-line span');

percent.forEach((item, i) => {
    lines[i].style.width = item.innerText;
});


// scroll up

$(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
        $('.up').fadeIn();
    } else {
        $('.up').fadeOut();
    }
})

$(document).ready(function () {
    $(".up").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});

//anchor link 

$('a[href*="#"]').on('click', function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});