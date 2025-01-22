// "use strict";

const wrapper = document.querySelector(".wrapper");
const eye = document.querySelector(".hide");
const input = document.querySelector(".input");

wrapper.addEventListener("click", () => {
  wrapper.style.border = "2px solid royalblue";
});

eye.addEventListener("click", () => {
  if (eye.src.includes("view.png")) {
    input.type = "password";
    eye.src = "hide.png";
  } else if (eye.src.includes("hide.png")) {
    input.type = "password";
    input.type = "text";
    eye.src = "view.png";
  }
});
