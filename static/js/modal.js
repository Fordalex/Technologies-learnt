// Technologies

// Reuseable modal function

function call_modal(id_name, title, state) {
    var modalTarget = '#'.concat(id_name);
    var titleTarget = '.'.concat(title)
    var tl = gsap.timeline();
    if (state == 'on') {
        tl.to(modalTarget, { duration: 0.2, left: 0, top: 0, backgroundColor: 'rgb(40, 40, 40)', ease: 'power3' })
        tl.to('.mobile-navigation', 0.2, { top: '-55px' }, '-=0.2')
        tl.to('.scroll-container', { duration: 0.8, height: '87vh', backgroundColor: 'white', ease: 'power3' }, '-=0.1')
        tl.to(titleTarget, { duration: 0.5, opacity: 1, bottom: 0, ease: 'power3', stagger: 0.07, color: 'white' }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.8, rotateY: 720, ease: 'back' }, '-=2.2')
    } else {
        tl.to(modalTarget, { duration: 0.3, left: 0, top: '110vh', backgroundColor: 'white', ease: 'power3' });
        tl.to('.mobile-navigation', 0.2, { top: '0px' }, '-=0.2');
        tl.to('.scroll-container', { duration: 0.01, height: '87vh', backgroundColor: 'white', ease: 'power3' }, '-=0.2')
        tl.to(titleTarget, { duration: 0.01, opacity: 0, bottom: '1000px', ease: 'power3', stagger: 0.2 }, '-=0.8')
        tl.to('.arrow-button', { duration: 0.01, rotateY: 0, ease: 'power3' }, '-=1.1')
    }
    $(modalTarget).toggleClass('closed')
}