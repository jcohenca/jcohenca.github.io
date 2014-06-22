$(document).ready(function() {

  $("#ball").draggable();


  $('#x1').draggable({
    start: function() {
        coordinates1('#x1');
    },
    stop: function() {
        coordinates1('#x1');
    }
  });


  $('#x2').draggable({
    start: function() {
        coordinates2('#x2');
    },
    stop: function() {
        coordinates2('#x2');
    }
  });

  $('#x3').draggable({
    start: function() {
        coordinates3('#x3');
    },
    stop: function() {
        coordinates3('#x3');
    }
  });

  $('#x4').draggable({
    start: function() {
        coordinates4('#x4');
    },
    stop: function() {
        coordinates4('#x4');
    }
  });

  $('#x5').draggable({
    start: function() {
        coordinates5('#x5');
    },
    stop: function() {
        coordinates5('#x5');
  }
});


$('#o1').draggable({
    start: function() {
        coordinates6('#o1');
    },
    stop: function() {
        coordinates6('#o1');
    }
  });


  $('#o2').draggable({
    start: function() {
        coordinates7('#o2');
    },
    stop: function() {
        coordinates7('#o2');
    }
  });

  $('#o3').draggable({
    start: function() {
        coordinates8('#o3');
    },
    stop: function() {
        coordinates8('#o3');
    }
  });

  $('#o4').draggable({
    start: function() {
        coordinates9('#o4');
    },
    stop: function() {
        coordinates9('#o4');
    }
  });

  $('#o5').draggable({
    start: function() {
        coordinates10('#o5');
    },
    stop: function() {
        coordinates10('#o5');
  }
});


})


var coordinates1 = function(element) {
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results1').text('player1:' + 'X: ' + left + ' ' + 'Y: ' + top);
}


var coordinates2 = function(element) {
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results2').text('player2:' + 'X: ' + left + ' ' + 'Y: ' + top);
}


var coordinates3 = function(element) {
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results3').text('player3:' + 'X: ' + left + ' ' + 'Y: ' + top);
}


var coordinates4 = function(element) {
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results4').text('player4:' + 'X: ' + left + ' ' + 'Y: ' + top);
}

var coordinates5 = function(element) {
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results5').text('player5:' + 'X: ' + left + ' ' + 'Y: ' + top);
}

var coordinates6 = function(element) {
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results6').text('player1:' + 'X: ' + left + ' ' + 'Y: ' + top);
}


var coordinates7 = function(element) {
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results7').text('player2:' + 'X: ' + left + ' ' + 'Y: ' + top);
}


var coordinates8 = function(element) {
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results8').text('player3:' + 'X: ' + left + ' ' + 'Y: ' + top);
}


var coordinates9 = function(element) {
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results9').text('player4:' + 'X: ' + left + ' ' + 'Y: ' + top);
}

var coordinates10 = function(element) {
    element = $(element);
    var top = element.position().top;
    var left = element.position().left;
    $('#results10').text('player5:' + 'X: ' + left + ' ' + 'Y: ' + top);
}

