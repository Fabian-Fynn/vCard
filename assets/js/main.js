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