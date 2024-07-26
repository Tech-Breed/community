// // nav
// function showSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'flex'
// }
// function hideSidebar(){
//     const sidebar = document.querySelector('.sidebar')
//     sidebar.style.display = 'none'
// }

// // 

//   // ScrollReveal JS
  
//   ScrollReveal({ distance: "30px", easing: "ease-in" });
  
//   ScrollReveal().reveal(".title", {
//     delay: 300,
//     origin: "top",
//   });
  
//   ScrollReveal().reveal(".paragraph", {
//     delay: 800,
//     origin: "top",
//   });
  
//   ScrollReveal().reveal("#form", {
//     delay: 1200,
//     origin: "bottom",
//   });
  




// // slider

 // Nav functions
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// ScrollReveal JS
ScrollReveal({ distance: "30px", easing: "ease-in" });

ScrollReveal().reveal(".blend", {
  delay: 300,
  origin: "top",
});

ScrollReveal().reveal(".container1 .gradient-text", {
  delay: 300,
  origin: "top",
});

ScrollReveal().reveal(".container1 .paragraph", {
  delay: 800,
  origin: "top",
});

ScrollReveal().reveal(".users-color-container", {
  delay: 800,
  origin: "top",
});

ScrollReveal().reveal(".container4 .section", {
  delay: 300,
  origin: "bottom",
  interval: 200,
});


$(document).ready(function() {
  const progressFill = document.querySelector(".progress-fill");
  var swiper = new Swiper(".parallax-slider", {
      speed: 1000,
      parallax: true,
      loop: true,
      autoplay: {
          delay: 10000, // Adjust autoplay delay as needed
          disableOnInteraction: false
      },
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
          prev: {
              shadow: true,
              translate: [0, 0, -1000]
          },
          next: {
              translate: ["100%", 0, 0]
          }
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
      },
      on: {
          slideChange: function () {
              // Reset progress bar when slide changes
              progressFill.style.width = '0%';
          },
          autoplayTimeLeft(s, time, progress) {
              // Update progress bar width based on autoplay time left
              progressFill.style.width = (1 - progress) * 100 + '%';
          }
      }
  });
});