$(document).ready(function () {
  $(".rk-dashboard-filter-icon").on("click", function () {
    $(this).children(".rk-filter-form-select").focus();
  });
  if ($(".rk-filter-form-select").length > 0) {
    $(".rk-filter-form-select").select2({
      minimumResultsForSearch: -1,
    });
  }

  // var minVal = 1,
  //   maxVal = 50;
  // $(".rk-form-input-number-increse").on("click", function () {
  //   var value = $(".rk-form-numner-input").children(".form-control").val();
  //   console.log(value);
  //   if (value < maxVal) {
  //     value++;
  //   }
  //   $(".rk-form-numner-input").children(".form-control").val(value);
  // });

  // $("#cancelinvitesCheck4").on("click", function () {
  //   $(".rk-cancel-invites-other-reason").toggleClass("show");
  // });

  // $(".rk-schedule-calendar-selecte-option").on("click", function () {
  //   $(".rk-schedule-calendar-selected-type").trigger("click");
  // });

  // $(".rk-menu-icon").on("click", function () {
  //   $(this).toggleClass("rk-menu-icon-active");
  //   $(".rk-dashboard-sidebar").toggleClass("rk-menu-active");
  //   $(".rk-site").toggleClass("rk-menu-show");
  // });

  // Scrollbar.initAll();
});
