$('.sassModalButton').on('click', function() {
    var modalTarget = '#sassModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(250, 250, 250)', ease: 'power3' })
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.t-letter', { duration: 0.5, bottom: 0, ease: 'bounce', stagger: 0.25 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.5, left: 0, top: 800, backgroundColor: 'white', ease: 'power3' });
        tl.to('.scroll-container', { duration: 0.5, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.t-letter', { duration: 0.5, bottom: 50, ease: 'bouce', stagger: 0.2 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 0, ease: 'back' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});


// django modal
$('.djangoModalButton').on('click', function() {
    var modalTarget = '#djangoModal';
    var tl = gsap.timeline();
    if ($(modalTarget).hasClass('closed')) {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(250, 250, 250)', ease: 'power3' })
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'bounce' }, '-=0.1')
        tl.to('.d-letter', { duration: 0.5, bottom: 0, ease: 'bounce', stagger: 0.25 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.01, left: 0, top: 800, backgroundColor: 'white', ease: 'power3' });
        tl.to('.scroll-container', { duration: 0.01, height: '0vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to('.d-letter', { duration: 0.01, bottom: '100px', ease: 'bouce', stagger: 0.2 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'back' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
});