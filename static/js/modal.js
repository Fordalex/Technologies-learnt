// Technologies

// Reuseable modal function

function call_modal(id_name, title, state) {
    var modalTarget = '#'.concat(id_name);
    var titleTarget = '.'.concat(title)
    var tl = gsap.timeline();
    if (state == 'on') {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.mobile-navigation', 0.2, { top: '-55px' }, '-=0.2')
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to(titleTarget, { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.mobile-navigation', 0.2, { top: '0px' }, '-=0.2');
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to(titleTarget, { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.2 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
}

// django modal

$('.djangoModalButton').on('click', function() {
    var modalTarget = '#djangoModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.mobile-navigation', 0.2, { top: '-55px' }, '-=0.2')
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.d-letter', { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.mobile-navigation', 0.2, { top: '0px' }, '-=0.2');
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.d-letter', { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.2 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});

// gunicorn
$('.gunicornModalButton').on('click', function() {
    var modalTarget = '#gunicornModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.mobile-navigation', 0.2, { top: '-55px' }, '-=0.2')
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.gun-letter', { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.mobile-navigation', 0.2, { top: '0px' }, '-=0.2');
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.gun-letter', { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.02 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});

// pillow
$('.pillowModalButton').on('click', function() {
    var modalTarget = '#pillowModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.mobile-navigation', 0.2, { top: '-55px' }, '-=0.2')
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.pillow-letter', { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.mobile-navigation', 0.2, { top: '0px' }, '-=0.2');
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.pillow-letter', { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.02 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});

// whitenoise
$('.whiteNoiseModalButton').on('click', function() {
    var modalTarget = '#whiteNoiseModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.mobile-navigation', 0.2, { top: '-55px' }, '-=0.2')
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.dd-letter', { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.mobile-navigation', 0.2, { top: '0px' }, '-=0.2');
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.dd-letter', { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.02 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});

// dj_database_url
$('.djdatabaseModalButton').on('click', function() {
    var modalTarget = '#dj_database_modal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.mobile-navigation', 0.2, { top: '-55px' }, '-=0.2')
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.tt-letter', { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.mobile-navigation', 0.2, { top: '0px' }, '-=0.2');
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.tt-letter', { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.02 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});

// psycopg2
$('.psycopg2ModalButton').on('click', function() {
    var modalTarget = '#psycopg2_modal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.mobile-navigation', 0.2, { top: '-55px' }, '-=0.2')
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.ps-letter', { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.mobile-navigation', 0.2, { top: '0px' }, '-=0.2');
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.ps-letter', { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.02 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});

// stripe
$('.stripeModalButton').on('click', function() {
    var modalTarget = '#stripeModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.mobile-navigation', 0.2, { top: '-55px' }, '-=0.2')
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.t-letter', { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.mobile-navigation', 0.2, { top: '0px' }, '-=0.2');
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.t-letter', { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.2 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});

// education

// landing page modal
$('.landingModalButton').on('click', function() {
    var modalTarget = '#landingModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.mobile-navigation', 0.2, { top: '-55px' }, '-=0.2')
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.t-letter', { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.mobile-navigation', 0.2, { top: '0px' }, '-=0.2');
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.d-letter', { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.2 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});