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