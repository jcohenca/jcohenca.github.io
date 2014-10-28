$(document).ready(function() {

    $('#main').fadeIn(450);
    $('.stack-box').hide();
    $('.section').hide();
    $('#portfolio-section').hide();
    $('#resume').hide();

    $('.wiggle')
      .mouseenter(function() {
        $(this).ClassyWiggle();
  });

    $('.wiggle')
      .mouseleave(function() {
        $(this).ClassyWiggle('stop');
  });
});




function about() {
  $('.stack-box').hide();
  $('.section').hide();
  $('#resume').hide();
  $('#portfolio-section').hide();

  $('#main').fadeIn(450);
}

function skills() {
  $('#main').hide();
  $('#resume').hide();
  $('#portfolio-section').hide();

  $('.stack-box').fadeIn(450);
}

function portfolio() {
  $('#main').hide();
  $('.stack-box').hide();
  $('#resume').hide();

  $('#portfolio-section').fadeIn(450);
}

function resume() {
  $('#main').hide();
  $('.stack-box').hide();
  $('#portfolio-section').hide();

  $('#resume').fadeIn(450);
}

function slides() {
   $('.slider').responsiveSlides({
      nav: true,
      prevText: " ",
      nextText: " ",
      auto: false
    });
};