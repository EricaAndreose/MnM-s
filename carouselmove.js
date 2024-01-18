$(document).ready(function () {
    function moveToSelected(element) {
      var selected;
  
      if (element === "next") {
        selected = $(".selected").next();
      } else if (element === "prev") {
        selected = $(".selected").prev();
      } else {
        selected = element;
      }
  
      var next = selected.next();
      var prev = selected.prev();
      var prevSecond = prev.prev();
      var nextSecond = next.next();
  
      $(".selected, .prev, .next, .nextRightSecond, .prevLeftSecond, .hideRight, .hideLeft").removeClass();
  
      selected.addClass("selected");
      prev.addClass("prev");
      next.addClass("next");
      nextSecond.addClass("nextRightSecond");
      prevSecond.addClass("prevLeftSecond");
      nextSecond.nextAll().addClass('hideRight');
      prevSecond.prevAll().addClass('hideLeft');
    }
  
    // Keyboard events
    $(document).keydown(function (e) {
      switch (e.which) {
        case 37: // left
          moveToSelected('prev');
          break;
  
        case 39: // right
          moveToSelected('next');
          break;
  
        default:
          return;
      }
      e.preventDefault();
    });
  
    // Click events
    $('#carousel div').click(function () {
      moveToSelected($(this));
    });
  
    $('#prev-btn').click(function () {
      moveToSelected('prev');
    });
  
    $('#next-btn').click(function () {
      moveToSelected('next');
    });
  });
  