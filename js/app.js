const wrapper = document.querySelector(".wrapper");
const indicator = document.querySelector(".indicator");
const number = document.querySelector(".number");
const windowHeight = window.innerHeight;
const bodyHeight = document.body.scrollHeight;
let x, y;

window.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
  wrapper.style.transform = `translate(${x}px,${y}px)`;
});

const updateIndicator = () => {
  return (window.scrollY / (bodyHeight - windowHeight)) * 100;
};

window.addEventListener("scroll", () => {
  indicator.style.height = `${updateIndicator()}%`;
  number.textContent = `${Math.ceil(updateIndicator())}%`;
});
