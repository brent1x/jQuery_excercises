$(document).ready(function() {

  $("form").on("submit", function(e) {
    $(".tasks").append("<li><input class='taco' type='checkbox'>" + " " + $("input[type=text]").val() + "&nbsp;" + "</input></li>");
  // console.log($("input[type=text]").val());
  });

  $("body").on("click", "li", function(e) {
    $(this).toggleClass("strikethrough");
  });

  $("body").on("click", "input[type=checkbox]", function(e) {
    $(this).parent().remove();
    console.log("clicking test");
  });

});