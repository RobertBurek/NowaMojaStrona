$(window).on( 'scroll', function () {
    if ($(this).scrollTop() > 400) {
        $('#scroll-to-top').fadeIn();
    } else {
        $('#scroll-to-top').fadeOut();
    }
});

function hideMenu(){
    $('.containerNav ul').toggleClass('show').toggleClass('hide');
}

function scroll(event) {
var href = $(this).attr('href');
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 1000);
    if ($(this).attr("class") =='btnNav') hideMenu();
  location.hash = href;
};
  
$('a[href*="#"]').click(scroll);


$(document).ready(function(){
  $('.showMenu').click(function(){
    hideMenu();
  });
});