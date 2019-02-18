//selecting dom elements for manipulation
const toggleSwitch = document.querySelector("#nav-toggle");
const navigation = document.querySelector("nav ul");

//toggle side nav
toggleNav.addEventListener("click", () => {
  navigation.slideToggle();
});

//Hamburger to X toggle
toggleNav.addEventListener("click", () => {
  this.classList.toggle("active");
});
