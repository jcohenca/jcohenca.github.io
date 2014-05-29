$(document).ready(function() {


  function contactsHover() {}

    $('.wiggle')
      .mouseenter(function() {
        $(this).ClassyWiggle();
  });

    $('.wiggle')
      .mouseleave(function() {
        $(this).ClassyWiggle('stop');
  });


  $(function() {
    $('.jcarousel').jcarousel({

      });

        $('.jcarousel-prev').jcarouselControl({
            target: '-=1'
        });

        $('.jcarousel-next').jcarouselControl({
            target: '+=1'
        });
  });

});


