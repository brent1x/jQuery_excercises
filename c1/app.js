$(document).ready(function() {

  // $("tr:odd").on("mouseover", function(e) {
  //   $(this).css("color", "blue");
  // });

  $("form").on("submit", function(e) {
    $("tr:odd").css("background", $(".grabme").val());
  });

});