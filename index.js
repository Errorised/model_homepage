var height;
var myWorkPosition = $(".myWork-box").offset().top;
var contactPosition = $(".contact-box").offset().top;
var descriptionPosition = ($(".description-box").offset().top - $(".description-box").outerHeight())

function textAnimation(scrollpoint, target, toggleClass) {
  if ($(document).scrollTop() > scrollpoint) {
    $(target).addClass(toggleClass);
  } else if ($(document).scrollTop() < scrollpoint)
    $(target).removeClass(toggleClass);
}

$(window).on("resize", () => {
  console.log($(document).width) ;
  if ($(document).width() > 990) {
    $(document).scroll(function () {
      textAnimation(100, ".navbar", "navigation-background");
      textAnimation(450, ".description-box", "scrolling-text");
      textAnimation(800, ".myWorkLeft", "scrolling-text");
    });
  }
  
  else if ($(document).width() < 990 && $(document).width() > 576) {
    console.log("990")
    $(document).scroll(function () {
      textAnimation(20, ".navbar", "navigation-background");
      textAnimation(300, ".description-box", "scrolling-text");
      textAnimation(600, ".myWorkLeft", "scrolling-text");
    });
  } else if ($(document).width() < 576) {
    $(".navbar").addClass("navigation-background")
    $(".description-box").addClass("scrolling-text");
    $(document).scroll(function () {
      textAnimation(100, ".myWorkLeft", "scrolling-text");
    });
  }
  
}).resize();









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
