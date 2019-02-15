(function($) {
  // Begin jQuery
  $(function() {
    $("#nav-toggle").click(function() {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function() {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery
