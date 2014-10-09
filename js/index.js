$(document).ready(function() {

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

  $('#top-right').fadeIn(450);
  $('#top-left').fadeIn(450);
}

function skills() {
  $('#top-right').hide();
  $('#top-left').hide();
  $('#resume').hide();
  $('#portfolio-section').hide();

  $('.stack-box').fadeIn(450);
}

function portfolio() {
  $('#top-right').hide();
  $('#top-left').hide();
  $('.stack-box').hide();
  $('#resume').hide();

  $('#portfolio-section').fadeIn(450);
}

function resume() {
  $('#top-right').hide();
  $('#top-left').hide();
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