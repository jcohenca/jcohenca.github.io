$(document).ready(function() {

    $('.stack-box').hide();
    $('.section').hide();
    $('#portfolio-section').hide();

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

  $('#top-right').show();
  $('#top-left').show();
}

function skills() {
  $('#top-right').hide();
  $('#top-left').hide();
  $('#resume').hide();
  $('#portfolio-section').hide();

  $('.stack-box').show();
}

function portfolio() {
  $('#top-right').hide();
  $('#top-left').hide();
  $('.stack-box').hide();
  $('#resume').hide();

  $('#portfolio-section').show();
}

function resume() {
  $('#top-right').hide();
  $('#top-left').hide();
  $('.stack-box').hide();
  $('.section').hide();
  $('#portfolio-section').hide();

  $('#resume').show();
  $('#res').show();
}

function slides() {
   $('.slider').responsiveSlides({
      nav: true,
      prevText: " ",
      nextText: " ",
      auto: false
    });
};