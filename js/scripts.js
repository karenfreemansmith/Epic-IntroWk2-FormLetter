$(document).ready(function() {
  $(".blanks form").submit(function(event) {
    $('.blanks').hide();
    $(".name").text($("input#name").val());
    $(".address").text($("input#address").val());
    $(".city").text($("input#city").val());
    $(".state").text($("input#state").val());
    $(".zip").text($("input#zip").val());
    $(".letter").show();

     event.preventDefault();
  });
});
