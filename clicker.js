let currentElement = null;

document.addEventListener("mouseover", (e) => {
  currentElement = e.target;
});

function clickAtTime() {
  if (currentElement) {
    currentElement.click();
  }
}

let now = new Date();
let target = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  11,
  00,
  0,
  0,
);
if (target < now) {
  target.setDate(target.getDate() + 1);
}
let delay = target - now;

setTimeout(clickAtTime, delay);

console.log(
  "Script running. Move your mouse over the element you want to click at now.",
);
