/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>> Central Tickets LTD <<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */

/* Close Pop Up's */
$(document).ready(function () {
  $(".close-popup").on("click", function () {
    $(".-pop-up-bg").css("display", "none");
  });
});

/* Close Request Change Pop Up when click outside the target DIV */
$(document).mouseup(function (e) {
  var container = $(".-pop-up");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".-pop-up-bg").css("display", "none");
  }
});

/* Show Pop Up's */
/* Show Pop Up # 6 */

$(document).ready(function () {
  $(".add-credit").on("click", function () {
    $(".pu-top-up-1").css("display", "block");
  });
});

$(document).ready(function () {
  $(".add-card").on("click", function () {
    $(".pu-top-up-2").css("display", "block");
  });
});

$(document).ready(function () {
  $(".open-top-up-pop-up").on("click", function () {
    $(".pu-top-up-1").css("display", "block");
  });
});

$(document).ready(function () {
  $(".continue").on("click", function () {
    $(".pu-top-up-2").css("display", "block");
    $(".pu-top-up-1").css("display", "none");
  });
});

$(document).ready(function () {
  $(".dropdown--call").click(function () {
    $(".dropdown--").toggleClass("active");
  });
});

/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
