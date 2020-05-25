$(document).ready(() => {
    // открыть\закрыть меню на моб.
    $('#btn_toggle').click(function() {
        $('.menu').toggleClass('show');
        if ($('.menu').hasClass('show')) {
            $('#btn_toggle').html('x');
            $('.menu').find('ul').slideDown(400);
        } else {
            $('#btn_toggle').html('&equiv;');
            $('.menu').find('ul').slideUp(400);
        }
    });
})