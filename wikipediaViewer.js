var $ = jQuery;
$(document).ready(function(){
  $("#rando").on("click", function(){getRandom();});
  $("#submit").on("click", function(){inputDisplay();});
  $(document).keypress(function(e){
    if(e.which==13){inputDisplay();}
  });

})

function getRandom(){
  window.open("https://en.wikipedia.org/wiki/Special:Random");
}

function inputDisplay(){
    var input = $("#search-bar").val();
    var p1 = $("#p1").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input  + "&format=json&origin=*"
   // $("#h1").html("first");

    $.getJSON(url , function(data){

      for(var i = 0; i < data[1].length; i++ ){
        var first = data[2][i];
        var webLink = data[3][i];
        $("#a" + i).html(first);
        $("#a" + i).attr("href", webLink);
      }
      $("#main").css({"height":"auto"});

    })

}
