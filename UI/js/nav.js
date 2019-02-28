(function() {
  var hamburger = {
    navToggle: document.querySelector("#nav-toggle"),
    nav: document.querySelector(".nav-list"),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle("active");
      this.nav.classList.toggle("expanded");
    }
  };

  hamburger.navToggle.addEventListener("click", function(e) {
    hamburger.doToggle(e);
  });
  hamburger.navToggle.addEventListener("click", function(e) {
    hamburger.nav.doToggle(e);
  });
})();
