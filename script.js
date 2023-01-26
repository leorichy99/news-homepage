const hamburger_icon = document.querySelector(".hamburger_icon");
const close_icon = document.querySelector(".close_icon");
const hamburger_container = document.querySelector(".hamburger_container");
const hamburger_content = document.querySelector(".hamburger_content");

hamburger_icon.addEventListener("click", () => {
  hamburger_icon.classList.add("hide");
  hamburger_container.classList.add("pointer");
  hamburger_content.classList.add("slide");
});

close_icon.addEventListener("click", () => {
  close_icon.classList.add("hide");
  hamburger_icon.classList.remove("hide");
  hamburger_container.classList.remove("pointer");
  hamburger_content.classList.remove("slide");
});
