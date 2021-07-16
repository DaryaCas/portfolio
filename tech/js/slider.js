
const btnFirst = document.querySelector(".button-first");
const  btnSecond = document.querySelector(".button-second");
const  buttons =document.querySelector(".slider-controls .buttons");
const slider = document.querySelector(".slider");


btnFirst.addEventListener("click", function (evt) {
  evt.preventDefault();
if (slider.classList.contains("slider-1")) {
  slider.classList.remove("slider-1");
  slider.classList.add("slider-2");
  btnSecond.classList.remove("active-button-slider-second");
  btnFirst.classList.add("active-button-slider-first");
}
else {
  slider.classList.add("slider-1");
  slider.classList.remove("slider-2");
  btnSecond.classList.add("active-button-slider-second");
  btnFirst.classList.remove("active-button-slider-first");
}
});

btnSecond.addEventListener("click", function (evt) {
  evt.preventDefault();
if (slider.classList.contains("slider-1")) {
  slider.classList.remove("slider-1");
  slider.classList.add("slider-2");
  btnSecond.classList.remove("active-button-slider-second");
  btnFirst.classList.add("active-button-slider-first");
}
else {
  slider.classList.add("slider-1");
  slider.classList.remove("slider-2");
  btnSecond.classList.add("active-button-slider-second");
  btnFirst.classList.remove("active-button-slider-first");
}
});
