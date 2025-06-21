let navs = document.querySelectorAll(".nav_li");
let hdr = document.querySelector(".hdr");
let logo = document.querySelector(".logo");
navs.forEach((ele) => {
  ele.addEventListener("click", () => {
    removeActive();
    ele.classList.add("active");
  });
});

function removeActive() {
  navs.forEach((ele) => {
    ele.classList.remove("active");
  });
}
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    // Change 100 to the desired scroll position
    hdr.classList.add("scro_hdr_ctr");
    logo.style.color = "rgba(60, 35, 239)";
    navs.forEach((ele) => {
      ele.classList.add("scro_hdr");
    });
  } else {
    logo.style.color = "#fff";
    hdr.classList.remove("scro_hdr_ctr");
    navs.forEach((ele) => {
      ele.classList.remove("scro_hdr");
    });
  }
});
// // Typed Initiate
// if ($(".rle_txt").length == 1) {
//   var typed_strings = $(".typed-text").text();
//   var typed = new Typed(".rle_txt", {
//     strings: typed_strings.split(", "),
//     typeSpeed: 100,
//     backSpeed: 20,
//     smartBackspace: false,
//     loop: true,
//   });
// }
document.addEventListener("DOMContentLoaded", function () {
  const skillInner = document.querySelector(".skill_inner");
  const skillWidth = document.querySelector(".skill").offsetWidth; // Width of each skill box
  const dots = document.querySelectorAll(".dot"); // Dot indicators
  const totalSkills = document.querySelectorAll(".skill").length; // Total number of skills

  let currentIndex = 0; // Current active skill index
  const scrollInterval = setInterval(() => {
    if (skillInner.scrollLeft + skillInner.offsetWidth >= skillInner.scrollWidth) {
      skillInner.scrollLeft = 0; // Reset scroll to the start when the end is reached
      currentIndex = 0; // Reset active dot
    } else {
      skillInner.scrollLeft += skillWidth * 3; // Scroll by 3 items at a time
      currentIndex = (currentIndex + 1) % totalSkills; // Update active dot
    }

    // Update active dot
    dots.forEach((dot) => dot.classList.remove("active")); // Remove active class from all dots
    dots[currentIndex].classList.add("active"); // Add active class to the current dot
  }, 3000); // Scroll every 3 seconds
});
