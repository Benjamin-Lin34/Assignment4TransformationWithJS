$('.card').click(function(){
    $(this).toggleClass('flipped');
  });

  $("#showP1").click(showP1);
  
  function showP1() {
    $('.project').hide();
    $('#p1').show();
  }


  $(".mood").hover(function(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var color = "rgb("+r+","+g+","+b+")"
    $(this).css("background-color", color);
});
