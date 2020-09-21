$(window).on( 'scroll', function () {
    if ($(this).scrollTop() > 400) {
        $('#scroll-to-top').fadeIn();
    } else {
        $('#scroll-to-top').fadeOut();
    }
});


function scroll(event) {
var href = $(this).attr('href');
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 1000);
  location.hash = href;
};
  
$('a[href*="#"]').click(scroll);