//your code here

function swapTheme() {
  const app = document.getElementById("app");
  const swap = document.getElementById("swap");

  if (app.classList.contains("day")) {
    app.classList.replace("day", "night");
    swap.classList.replace("button_day", "button_night");
  } else {
    app.classList.replace("night", "day");
    swap.classList.replace("button_night", "button_day");
  }
}