
// This sets the background images of the portfolio items on the work.htm page
// changing the value of the data-img attribute will change the image
// the default image is set in the css.
function work(){
    var
      img,
      listImg = document.getElementsByClassName('portfolio__img');
      for (var i = 0; i < listImg.length; i++) {
        if (listImg[i].hasAttribute('data-img')) {
          var img = listImg[i].getAttribute('data-img');
          listImg[i].style.backgroundImage="url('" + img + "')";
        }
      }
  }
