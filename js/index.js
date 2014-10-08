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
  $('#top-right').show();
  $('#top-left').show();
  $('.stack-box').hide();
  $('.section').hide();
  $('#portfolio-section').hide();
}

function skills() {
  $('#top-right').hide();
  $('#top-left').hide();
  $('.stack-box').show();
  $('#portfolio-section').hide();
}

function portfolio() {
  $('#top-right').hide();
  $('#top-left').hide();
  $('.stack-box').hide();
  $('#portfolio-section').show();

}

function slides() {
 
   $('.slider').responsiveSlides({
      nav: true,
      prevText: " ",
      nextText: " ",
      auto: false
    });
};

// });
// }
