$(document).ready(function(){
  $(".image1").click(function(){
    $(".image1").hide(1200);
    $(".p1").toggle(1200);
    $(".p1").show(1200);
  })
  $(".p1").click(function(){
    $(".p1").hide(1200);
    $(".image1").toggle(1200);
    $(".image1").show(1200);
  });
});
$(document).ready(function(){
    $(".image2").click(function(){
      $(".image2").hide(1200);
      $(".p2").toggle(1200);
      $(".p2").show(1200);
    })
    $(".p2").click(function(){
      $(".p2").hide(1200);
      $(".image2").toggle(1200);
      $(".image2").show(1200);
    });
});
$(document).ready(function(){
    $(".image3").click(function(){
      $(".image3").hide(1200);
      $(".p3").toggle(1200);
      $(".p3").show(1200);
    })
    $(".p3").click(function(){
      $(".p3").hide(1200);
      $(".image3").toggle(1200);
      $(".image3").show(1200);
    });
});
$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});
$(document).ready(function(){
    $('#submission').submit(function(event){
        var display1 = $('input:first').val();
        var display2 = $('input#mail').val();
        if(display1 && display2 != ''){
            alert ('Thank you ' + display1 + ' your subscription is well received');
        }else {
            alert ('Invalid input');
        }
        event.preventDefault();
    })
});