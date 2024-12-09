document.addEventListener('DOMContentLoaded', function () {
  const carouselElement = document.querySelector('#carouselExampleIndicators');
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000,  
    ride: 'carousel' 
  });

  const prevButton = document.querySelector('.carousel-control-prev');
  const nextButton = document.querySelector('.carousel-control-next');

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', function () {
      carousel.prev();
    });

    nextButton.addEventListener('click', function () {
      carousel.next();
    });
  }
});

document.getElementById("menuToggle").addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");

  if (sidebar.style.display === "block" || sidebar.style.display === "") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "block";
  }
});
