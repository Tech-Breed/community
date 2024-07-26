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
