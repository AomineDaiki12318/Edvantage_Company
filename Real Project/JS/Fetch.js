fetch("Nav.html").then(response=>response.text()).then(data=>{

    document.getElementById("nav_place").innerHTML = data;
})

 window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer-section');
    const scrollTop = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If user scrolls to near the bottom (10px threshold)
    if (scrollTop + windowHeight >= documentHeight - 10) {
      footer.classList.add('show');
    } else {
      footer.classList.remove('show');
    }
  });
  
      var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });