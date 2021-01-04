var height;
var myWorkPosition = $(".myWork-box").offset().top;
var contactPosition = $(".contact-box").offset().top;
var descriptionPosition = ($(".description-box").offset().top - $(".description-box").outerHeight())

function textAnimation (scrollpoint, target, toggleClass) {
  if ($(document).scrollTop() > scrollpoint) {
    $(target).addClass(toggleClass);
  } else if ($(document).scrollTop() < scrollpoint)
    $(target).removeClass(toggleClass);
}

$(document).scroll(function() {
  textAnimation (90, ".navbar", "navigation-background");
  textAnimation (300, ".description-box", "scrolling-text");
  textAnimation (1100, ".myWorkLeft", "scrolling-text");
});


// $(".nav-link").click(function(event){
//   buttonClick(event.target.id);
// });
//
//
// function buttonClick(id) {
//
//   switch (id) {
//     case "description-button":
//       $(document).scrollTop(descriptionPosition);
//       break;
//     case "myWork-button":
//       $(document).scrollTop(myWorkPosition);
//       break;
//     case "contact-button":
//       $(document).scrollTop(contactPosition);
//       break;
//   }
// }
