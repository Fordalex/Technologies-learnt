$('#open-all-front').on('click', function() {
    $('#css').collapse('toggle');
    $('#js').collapse('toggle');
    $('#frame').collapse('toggle');
    $('#animation').collapse('toggle');
    $('#charts').collapse('toggle');
    $('#icons').collapse('toggle');
    $('#fonts').collapse('toggle');
});

$('#open-all-back').on('click', function() {
    $('#framework').collapse('toggle');
    $('#django').collapse('toggle');
    $('#modules').collapse('toggle');
});