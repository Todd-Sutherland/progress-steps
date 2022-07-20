const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle"); // more than 1 circle, we want to select them all, and this will bring them all in as a NodeList (similar to an array)

let currentActive = 1; // this will represent whichever circle is active

// When 'Next' is clicked, we want to take whatever the currentActive is at the time, and increment it by 1
// We also want to make sure that it doesn't go past 4 (the end)
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length; // this will keep the currentActive at 4 no matter how many times we click Next
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  // if currentActive is less than 1, then we know we're at the very beginning

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
