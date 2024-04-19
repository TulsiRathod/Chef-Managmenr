document.ready(function () {
  document.getElementByClassName("rk-menu-icon").on("click", function () {
    this.classList.toggle("rk-menu-icon-active");
    document
      .getElementByClassName("rk-dashboard-sidebar")
      .classList.toggle("rk-menu-active");
    document.getElementByClassName("rk-site").classList.toggle("rk-menu-show");
  });
});
