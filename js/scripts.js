$(function(){
  $("#buttoncat").click(function(){
    // $("p#dog").empty();
    $("p#dog").append("Bark, Bark!");
  });
  $("#buttondog").click(function(){
    // $("p#cat").empty();
    $("p#cat").prepend("Meow, Meoooow!");
    $("#jk").remove();
    $("p#cat").before("<img id=\"jk\" src=\"http://i.imgur.com/hYPJXXL.jpg\">");

  });



});
