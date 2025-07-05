 window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const sun = document.querySelector(".sun-wrapper");
  // Adjust this multiplier to control movement
  sun.style.transform = `translateY(${scrollY * 0.08}px)`;
});
  

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const sticky = document.querySelector(".sticky-visual");
  const offsetTop = sticky.offsetTop;
  const height = sticky.offsetHeight;

  const progress = Math.min(Math.max((scrollY - offsetTop) / height, 0), 1);

  const leftTree = document.querySelector(".tree-front.left");
  const rightTree = document.querySelector(".tree-front.right");

  leftTree.style.transform = `translateX(${progress * -30}px)`;
  rightTree.style.transform = `translateX(${progress * 30}px)`;
});

// timeline section, scroll effect
const scroller = scrollama();
  const image = document.getElementById('timeline-image');

  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      debug: false,
    })
    .onStepEnter(response => {
      const newImg = response.element.dataset.img;
      image.style.opacity = 0;

      setTimeout(() => {
        image.src = newImg;
        image.style.opacity = 1;
      }, 250);
    });

const mobileScrollerAlt = scrollama();

  mobileScrollerAlt
    .setup({
      step: ".mobile-step-alt",
      offset: 0.5,
      debug: false,
    })
    .onStepEnter((response) => {
      const newImage = response.element.dataset.img;
      const imageElement = document.getElementById("mobile-image-alt");

      imageElement.style.opacity = 0;
      setTimeout(() => {
        imageElement.src = newImage;
        imageElement.style.opacity = 1;
      }, 300);
    });

document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step-mobile");
  const image = document.getElementById("mobile-timeline-image");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newSrc = entry.target.dataset.img;
          image.style.opacity = 0;
          setTimeout(() => {
            image.src = newSrc;
            image.style.opacity = 1;
          }, 200);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Adjust to fire when text is in center-ish
    }
  );

  steps.forEach((step) => observer.observe(step));
});