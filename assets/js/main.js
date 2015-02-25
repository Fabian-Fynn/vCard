$(function() {
  $('#projects').hide();
  $('#scrollProjects').click(function(e) {
    $('#projects').show();

    $('html, body').animate({
        scrollTop: $( '#projects' ).offset().top
    },1200, 'easeInOutCubic');

    return false;
  });
});

$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  var offset = $('#projects').offset().top;
  // var scroll =
  $('.project .content').css('background-position-y',-(scrolled*0.45+offset)+'px');
}