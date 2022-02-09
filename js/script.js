$(document).ready(function () {

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

    //animation text
    new WOW().init();

    //burger menu

    const burger_btn = document.querySelector('.burger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const mobile_item = document.querySelectorAll('.mobile-nav__item');
    const body = document.querySelector('body');

    burger_btn.addEventListener("click", () => {
        burger_btn.classList.toggle("burger_active")
        mobile_menu.classList.toggle("mobile-nav_active")
        if (burger_btn.classList.contains('burger_active')) {
            body.style.overflow = "hidden";
        }
    })

    mobile_item.forEach(item => {
        item.addEventListener("click", () => {
            burger_btn.classList.toggle("burger_active")
            mobile_menu.classList.toggle("mobile-nav_active")
            console.log(burger_btn.classList.contains('burger_active'));

            if (burger_btn.classList.contains('burger_active') === false) {
                body.style.overflow = "visible";
            }

        })
    })

    burger_btn.addEventListener('click', () => {
        if (burger_btn.classList.contains('burger_active') === false) {
            body.style.overflow = "visible";
        }
    })

});