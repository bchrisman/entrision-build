// This is the smooth scrolling function, mainly written for the Conact button in the navigation
function smoothScroll(id) {
  var id = id;
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth';
  });
}
