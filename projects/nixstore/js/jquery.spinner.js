$(function() {

  // $(".numbers-row").append('<div class="inc button">+</div><div class="dec button">-</div>');

  $(".btn-plus, .btn-minus").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parents('.form-spinner').find("input").val();

    console.log(oldValue)

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
     // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parents('.form-spinner').find("input").val(newVal);

  });

});