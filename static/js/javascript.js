// on load animation

var tl = gsap.timeline()

tl.to('.left-shutter', 0.7, {})
tl.to('.right-shutter', 0.7, {}, '-=0.7');
tl.to('.page-container', 0.1, { opacity: 1 }, '-=0.7')
tl.to('.left-shutter', 1.5, { x: '-60vw' })
tl.to('.right-shutter', 1.5, { x: '60vw' }, '-=1.5')
tl.from('.wobble-onload', 1, { transform: 'scale(0)', ease: 'elastic', stagger: 0.1 }, '-=1.2')
tl.from('.main-title', 1, { opacity: 0, ease: 'power2' }, '-=0.7')

$('#open-all-front').on('click', function() {
    $('#css').collapse('toggle');
    $('#js').collapse('toggle');
    $('#frame').collapse('toggle');
    $('#animation').collapse('toggle');
    $('#charts').collapse('toggle');
    $('#icons').collapse('toggle');
    $('#fonts').collapse('toggle');
    $('#forms').collapse('toggle');
    $('.front-plus').toggleClass('fa-plus-square');
    $('.front-plus').toggleClass('fa-minus-square');
    $('#illustrations').collapse('toggle');
    $('#photos').collapse('toggle');
    $('#svg').collapse('toggle');
    $('#inspiration').collapse('toggle');
});

$('#open-all-back').on('click', function() {
    $('#framework').collapse('toggle');
    $('#django').collapse('toggle');
    $('#modules').collapse('toggle');
    $('#database').collapse('toggle');
});

$('.far').on('click', function() {
    $(this).toggleClass('fa-plus-square')
    $(this).toggleClass('fa-minus-square')
});