
// $(document).ready(function() {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 1) {
//       $("custom-navbar").addClass("sticky");
//     } else {
//       $("custom-navbar").removeClass("sticky");
//     }
//   });
// });



window.onscroll = function() {
  stickyFunction();
}


var navbar = document.getElementById("navbar-section");
var sticky = navbar.offsetTop;


function stickyFunction() {
  if (window.pageYOffset > 0) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// swiper 

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop:true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

const cardSlider = new Swiper(".testi", {
  autoplay: {
    delay: 3000,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3,
  spaceBetween: 70,
  breakpoints: {
    // when window is <= 767px
    767: {
      slidesPerView: 1,
    },
    // when window is <= 991px
    991: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});