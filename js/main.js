$(window).on( 'scroll', function () {
    if ($(this).scrollTop() > 400) {
        $('#scroll-to-top').fadeIn();
    } else {
        $('#scroll-to-top').fadeOut();
    }
});