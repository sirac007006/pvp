$(function() {
  var plavi = $(".plavi");
  var crveni = $(".crveni");
  var move = 20;

  $(document).keydown(function(e) {
    var currentRight = parseInt($(plavi).css('right')) || 0; // Trenutna vrednost 'right'
    $(plavi).css('position', 'relative'); // Osiguraj da je pozicija 'relative'

    var currentRightr = parseInt($(crveni).css('right')) || 0; // Trenutna vrednost 'right'
    $(crveni).css('position', 'relative'); // Osiguraj da je pozicija 'relative'

    var currentUp = parseInt($(plavi).css('top')) || 0; // Trenutna vrednost 'top'
    var currentUpr = parseInt($(crveni).css('top')) || 0; // Trenutna vrednost 'top'

    switch (e.keyCode) {
      case 39: // Strelica na desno
        $(plavi).css('right', currentRight - move + 'px'); // Smanji 'right' za 10px
        break;
      case 37: // Strelica na levo
        $(plavi).css('right', currentRight + move + 'px'); // Povećaj 'right' za 10px
        break;
      case 68: // D
        $(crveni).css('right', currentRightr - move + 'px'); // Smanji 'right' za 10px
        break;
      case 65: // A
        $(crveni).css('right', currentRightr + move + 'px'); // Povećaj 'right' za 10px
        break;
      case 87: // W
        $(crveni).css('top', currentUpr - move + 'px'); // Smanji 'top' za 10px
        break;
      case 83: // S
        $(crveni).css('top', currentUpr + move + 'px'); // Povećaj 'top' za 10px
        break;
      case 38: // Strelica na gore
        $(plavi).css('top', currentUp - move + 'px'); // Smanji 'top' za 10px
        break;
      case 40: // Strelica na dole
        $(plavi).css('top', currentUp + move + 'px'); // Povećaj 'top' za 10px
        break;
    }

    if(currentRight < -1240){
      window.location.href = "plavi.html";
    }
    else if(currentRightr < -1240){
      window.location.href = "crveni.html";
    }
  });
});