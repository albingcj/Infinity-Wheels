
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
// $("#scroller").simplyScroll();




// function scroll() {
//   // check all images to see off left
//   for (var i = 0; i < imgs.length; i++) {
//     var img = imgs[i];
//     var distLeft = img.getBoundingClientRect().left;

//     // is this img off screen?
//     if (distLeft < 0 - img.clientWidth) {
//       var index = i - 1;
//       if (index < 0) {
//         index = imgLength - 1;
//       }

//       // get last element postion
//       var lastPos = imgs[index].style.transform.split(/[()]/)[1];
//       var lastX = lastPos.split(",")[0];
//       newX = parseInt(lastX) + imgs[index].clientWidth + gap;

//       // push off screen element to end of divs
//       img.style.transform = "translate3D(" + newX + "px, -50%, 0)";
//     }
//   }

//   // lets just move the scroller to the left
//   t -= 1;
//   projectOne.style.transform = "translate3D(" + t + "px, 0, 0)";
//   requestAnimationFrame(scroll);
// }
// requestAnimationFrame(scroll);




// const swiper = new Swiper(".swiper", {
// 	// Optional parameters
// 	direction: "horizontal",
// 	loop: true,
// 	autoHeight: false,
// 	centeredSlides:true,
// 	slidesPerView: 1,
//   // Responsive breakpoints
//   breakpoints: {
// 		640: {
//       slidesPerView:2,
// 			  spaceBetween: 40,
//     },
//     992: {
//       slidesPerView: 3,
// 			  spaceBetween: 40,
//     }
//   },

// 	// If we need pagination
// 	pagination: {
// 		el: ".swiper-pagination"
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev"
// 	}

// 	// And if we need scrollbar
// 	/*scrollbar: {
//     el: '.swiper-scrollbar',
//   },*/
// });


$(document).ready(function() {
  // Swiper: Slider
      new Swiper('.swiper-container', {
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 20,
          breakpoints: {
              1920: {
                  slidesPerView: 3,
                  spaceBetween: 30
              },
              1028: {
                  slidesPerView: 2,
                  spaceBetween: 30
              },
              480: {
                  slidesPerView: 1,
                  spaceBetween: 10
              }
          }
      });
  });
  


















