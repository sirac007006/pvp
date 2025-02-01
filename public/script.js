$(function() {
  var plavi = $(".plavi");
  var crveni = $(".crveni");
  var ring = $(".ring");
  var move = 20;
  var plavihp = 10;
  var crvenihp = 10;

  $(document).keydown(function(e) {
    var currentRight = parseInt($(plavi).css('right')) || 0; // Trenutna vrednost 'right'
    $(plavi).css('position', 'relative'); // Osiguraj da je pozicija 'relative'

    var currentRightr = parseInt($(crveni).css('right')) || 0; // Trenutna vrednost 'right'
    $(crveni).css('position', 'relative'); // Osiguraj da je pozicija 'relative'

    var currentUp = parseInt($(plavi).css('top')) || 0; // Trenutna vrednost 'top'
    var currentUpr = parseInt($(crveni).css('top')) || 0; // Trenutna vrednost 'top'

    var ringOffset = ring.offset();
    var ringWidth = ring.width();
    var ringHeight = ring.height();

    var plaviOffset = plavi.offset();
    var crveniOffset = crveni.offset();

    var isPlaviInRing = plaviOffset.left >= ringOffset.left &&
                        plaviOffset.top >= ringOffset.top &&
                        plaviOffset.left + plavi.width() <= ringOffset.left + ringWidth &&
                        plaviOffset.top + plavi.height() <= ringOffset.top + ringHeight;

    var isCrveniInRing = crveniOffset.left >= ringOffset.left &&
                         crveniOffset.top >= ringOffset.top &&
                         crveniOffset.left + crveni.width() <= ringOffset.left + ringWidth &&
                         crveniOffset.top + crveni.height() <= ringOffset.top + ringHeight;

    switch (e.keyCode) {
      case 39: // Strelica na desno
        $(plavi).css('right', currentRight - move + 'px');
        $(".plavi img").attr("src", "/spongebob_flipped.png");
        break;
      case 37: // Strelica na levo
        $(plavi).css('right', currentRight + move + 'px');
        $(".plavi img").attr("src", "/spongebob.png"); // Povećaj 'right' za 10px
        break;
      case 68: // D
        $(crveni).css('right', currentRightr - move + 'px'); // Smanji 'right' za 10px
        $(".crveni img").attr("src", "/marioleft.png");
        break;
      case 65: // A
        $(crveni).css('right', currentRightr + move + 'px'); // Povećaj 'right' za 10px
        $(".crveni img").attr("src", "/mario_flipped.png");
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
      case 76: // L
        if (isPlaviInRing && isCrveniInRing) {
          crvenihp -= 1;
          console.log(crvenihp);
          $(".crveni p").text("HP:" + crvenihp);
        }
        break;
      case 88: // X
        if (isPlaviInRing && isCrveniInRing) {
          plavihp -= 1;
          console.log(plavihp);
          $(".plavi p").text("HP:" + plavihp);
        }
        break;
    }

    // Provera da li je crveni izašao izvan granica ekrana
    if (crveniOffset.left < 0 || crveniOffset.top < 0 || 
        crveniOffset.left + crveni.width() > $(window).width() || 
        crveniOffset.top + crveni.height() > $(window).height()) {
      crvenihp = 0;
      $(".crveni p").text("HP:" + crvenihp);
    }

    // Provera da li je plavi izašao izvan granica ekrana
    if (plaviOffset.left < 0 || plaviOffset.top < 0 || 
        plaviOffset.left + plavi.width() > $(window).width() || 
        plaviOffset.top + plavi.height() > $(window).height()) {
      plavihp = 0;
      $(".plavi p").text("HP:" + plavihp);
    }
  });
});