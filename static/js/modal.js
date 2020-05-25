// Technologies

// Reuseable modal function

function call_modal(id_name, title, state) {
    var modalTarget = '#'.concat(id_name);
    var titleTarget = '.'.concat(title)
    var tl = gsap.timeline();
    if (state == 'on') {
        tl.to('.page-move', 0.8, { transform: 'translate(0vw, -100vh)', ease: 'power3' })
        tl.to(modalTarget, { duration: 0.8, transform: 'translate(0, 0)', ease: 'power3', opacity: 1 }, '-=0.8')
        tl.to('.mobile-navigation', 0.6, { top: '-55px' }, '-=0.7')
    } else {
        tl.to('.page-move', 0.2, { transform: 'translate(0, 0)' })
        tl.to(modalTarget, { duration: 0.13, transform: 'translate(0vw, 150vh)', ease: 'power3', opacity: 0 }, '-=0.2');
        tl.to('.mobile-navigation', 0.02, { top: '0px' }, '-=0.02');
    }
    $(modalTarget).toggleClass('closed')
}