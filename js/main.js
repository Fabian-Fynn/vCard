$(function() {
  $('#scrollProjects').click(function(e) {
    $('html, body').animate({
        scrollTop: $( '#projects' ).offset().top
    },1200, 'easeInOutCubic');

    return false;
  });

  createBadges();

  var badgeTitle

  $(".badge").on("mouseenter", function(ev){
    if($(window).width() > 1200){
      var $elem = $(this)
      badgeTitle = $elem.attr("title")
      $elem.removeAttr("title")
      $elem.append(badgeTitle)
    }
  })

  $(".badge").on("mouseleave", function(){
    var $elem = $(this)
    $elem.attr("title", badgeTitle)
    $elem.empty()
  })
});

$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  var offset = $('#projects').offset().top;
  $('.project .content').css('background-position-y',-(scrolled*0.45+offset)+'px');
}

function createBadges(){
  $("#badges").append('<div class="col"></div>')
  var badges = [
                  ['html', "HTML5"],
                  ['css', "CSS3"],
                  ['sass', "SASS/SCSS"],
                  ['js', "JavaScript"],
                  ['jquery', "jQuery"],
                  ['angular', "AngularJS"],
                  ['node', "NodeJS"],
                  ['rails', "Ruby on Rails 4"],
                  ['php', "PHP"],
                  ['mongodb', "mongoDB"],
                  ['postgres', "PostgreSQL"],
                  ['mysql', "MYSQL"],
                  ['git', "Git"],
                  ['bootstrap', "Twitter's Bootstrap"],
                  ['wordpress', "Wordpress"],
                  ['cs', "Visual C#"],
                  ['ios', "iOS - Swift"],
                  ['ps', "Adobe Photoshop CC"],
                  ['pr', "Adobe Premiere Pro CC"],
                  ['ae', "Adobe After Effects CC"]
              ]
  badges = _.shuffle(badges)
  $.each(badges, function( key, value ){
    $("#badges .col").append('<div class="badge" id="badge_' + value[0] + '" title="' + value[1] + '" ></div>')
    $("#badge_" + value[0]).css('background-image', "url(assets/img/" + value[0] + ".png)")
  })

}