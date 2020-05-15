// modal
$('.sassModalButton').on('click', function() {
    var modalTarget = '#sassModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(242, 242, 242)', ease: 'power3' })
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.t-letter', { duration: 0.5, bottom: 0, ease: 'power3', stagger: 0.07 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.t-letter', { duration: 0.01, bottom: '1000px', ease: 'power3', stagger: 0.2 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});


// django modal
$('.djangoModalButton').on('click', function() {
    var modalTarget = '#djangoModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.d-letter', { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.d-letter', { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.2 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});

// landing page modal
$('.landingModalButton').on('click', function() {
    var modalTarget = '#landingModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.t-letter', { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.d-letter', { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.2 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});