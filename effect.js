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

// Show sun only inside the .scrolly section
window.addEventListener("scroll", () => {
  const scrollySection = document.querySelector(".scrolly");
  const sun = document.querySelector(".sun-wrapper");

  const rect = scrollySection.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

  document.body.classList.toggle("scrolly-visible", isVisible);
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


document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step-mobile2");
  const image = document.getElementById("mobile-timeline-image2");

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
// tank target effect

const container = document.getElementById('interactive-target-desktop');
const target = container.querySelector('.target-img');

function updateTargetPosition(x, y) {
  const maxMove = 50;

  // Get viewport dimensions
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Normalize mouse/finger position from 0 to 1
  const relX = x / vw;
  const relY = y / vh;

  // Calculate how much to move from center (-maxMove to +maxMove)
  const moveX = (relX - 0.5) * 2 * maxMove;
  const moveY = (relY - 0.5) * 2 * maxMove;

  // Apply the offset
  target.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
}

// Mouse move (anywhere)
window.addEventListener('mousemove', (e) => {
  updateTargetPosition(e.clientX, e.clientY);
});

// Touch move (anywhere)
window.addEventListener('touchmove', (e) => {
  if (e.touches.length > 0) {
    updateTargetPosition(e.touches[0].clientX, e.touches[0].clientY);
  }
}, { passive: true });


// map section destop

document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.map-section .trigger');
  const mapSection = document.querySelector('.map-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const current = parseInt(entry.target.dataset.line, 10);
        // Activate all lines up to the current one
        for (let i = 1; i <= current; i++) {
          mapSection.classList.add(`line-${i}-active`);
        }
      }
    });
  }, {
    threshold: 0.5
  });

  triggers.forEach(trigger => observer.observe(trigger));
});

//trip map section sticky scroll

const fadeScroller = scrollama();
  const fadeImage = document.getElementById("fade-image-scroll");

  fadeScroller
    .setup({
      step: ".fade-step",
      offset: 0.5,
      debug: false
    })
    .onStepEnter(response => {
      const newImg = response.element.dataset.img;
      fadeImage.style.opacity = 0;

      setTimeout(() => {
        fadeImage.src = newImg;
        fadeImage.style.opacity = 1;
      }, 250);
    });

      window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    document.querySelector(".sway-1").style.transform =
      `rotate(${Math.sin(scrollY * 0.003) * 3}deg)`;

    document.querySelector(".sway-2").style.transform =
      `rotate(${Math.sin(scrollY * 0.02 + 1) * (-3)}deg)`;

    document.querySelector(".sway-3").style.transform =
      `rotate(${Math.sin(scrollY * 0.003) * 3}deg)`;
  });

  // Mobile map section

  const mobileMapTriggers = document.querySelectorAll('.map-section-mobile .trigger');
    const mobileMapLines = document.querySelectorAll('.map-section-mobile .line');
    if (mobileMapTriggers.length && mobileMapLines.length) {
      mobileMapTriggers.forEach((trigger, index) => {
        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && mobileMapLines[index]) {
              mobileMapLines[index].classList.add('visible');
            }
          });
        }, { threshold: 0.5 });
        io.observe(trigger);

        });
    }