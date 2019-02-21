//selecting dom elements for manipulation
const toggleNav = document.querySelector("#nav-toggle");
const navigation = document.querySelector("nav ul");

//toggle side nav
toggleNav.addEventListener("click", () => {
  navigation.slideToggle();
  this.classList.toggle("active");
});

// //Hamburger to X toggle
// toggleNav.addEventListener("click", () => {
//   this.classList.toggle("active");
// });
