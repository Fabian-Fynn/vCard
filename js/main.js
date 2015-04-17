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
    var $elem = $(this)
    badgeTitle = $elem.attr("title")
    $elem.removeAttr("title")
    $elem.append(badgeTitle)
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
  var badges = {
                  html: "HTML5",
                  css: "CSS3",
                  sass: "SASS/SCSS",
                  js: "JavaScript",
                  jquery: "jQuery",
                  angular: "AngularJS",
                  node: "NodeJS",
                  rails: "Ruby on Rails 4",
                  php: "PHP",
                  mongodb: "mongoDB",
                  postgres: "PostgreSQL",
                  mysql: "MYSQL",
                  git: "Git",
                  bootstrap: "Twitter's Bootstrap",
                  wordpress: "Wordpress",
                  cs: "Visual C#",
                  ios: "iOS - Swift",
                  ps: "Adobe Photoshop CC",
                  pr: "Adobe Premiere Pro CC",
                  ae: "Adobe After Effects CC"
              }
  $("#badges").append('<div class="col"></div>')
  $.each(badges, function( key, value ){
    $("#badges .col").append('<div class="badge" id="badge_' + key + '" title="' + value + '" ></div>')
    $("#badge_" + key).css('background-image', "url(assets/img/" + key + ".png)")
  })

}