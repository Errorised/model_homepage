var height;
var myWorkPosition = $(".myWork-box").offset().top;
var contactPosition = $(".contact-box").offset().top;
var descriptionPosition = ($(".description-box").offset().top - $(".description-box").outerHeight())

$(document).scroll(function() {
  navBar();
  scrollingText();
  scrollingText2();
});

function navBar() {

  if ($(document).scrollTop() > 70) {
    $(".navbar").addClass("navigation-background");
  } else if ($(document).scrollTop() < 70)
    $(".navbar").removeClass("navigation-background");
}

function scrollingText() {
  if ($(document).scrollTop() > 200) {
    $(".description-box").addClass("scrolling-text");
  } else if ($(document).scrollTop() < 200) {
    $(".description-box").removeClass("scrolling-text");
  }
}

function scrollingText2() {
  if ($(document).scrollTop() > 900) {
    $(".myWorkLeft").addClass("scrolling-text");
    console.log("go");
  } else if ($(document).scrollTop() < 900) {
    $(".myWorkLeft").removeClass("scrolling-text");
  }
}

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
