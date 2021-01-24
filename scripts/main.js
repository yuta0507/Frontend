document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper-container');
    hero.start();

    const cb = function (el, isIntersecting) {
        if(isIntersecting) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

    const so2 = new ScrollObserver('.tween-animate-title', cb);

    const _inviewAnimation = function(el, inview) {
        if(inview) {
            el.classList.add('inview');
        }else {
            el.classList.remove('inview');
        }
    }

    const so = new ScrollObserver('.cover-slide', _inviewAnimation);

    const header = document.querySelector('.header');

    const _navAnimation = function(el, inview) {
        if(inview) {
            header.classList.remove('triggered');
        }else {
            header.classList.add('triggered');
        }
    }

    const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once: false});

    const sides = document.querySelectorAll('.side');

    const _sideAnimation = function(el, inview) {
        if(inview) {
            sides.forEach(sides => sides.classList.add('inview'));
        }else {
            sides.forEach(sides => sides.classList.remove('inview'));
        }
    }

    const so4 = new ScrollObserver('#main-content', _sideAnimation, {once: false, rootMargin: "-300px 0px"});


    new MobileMenu();
});

