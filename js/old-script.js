let translation = 0;
$(".invis-hover").mouseover(function() {
    translation -= 200;
    $( ".past-event-cards" ).css({"-webkit-transform":`translate(${translation}px, 0)`});
  });
  $(".invis-hover-back").mouseover(function() {
    if(translation < 0) {
        translation += 200;
        $( ".past-event-cards" ).css({"-webkit-transform":`translate(${translation}px, 0)`});
    }
});