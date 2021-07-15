const tgOne = document.querySelector(".slider__toggle-adv-1");
const tgTwo = document.querySelector(".slider__toggle-adv-2");
const tgThree = document.querySelector(".slider__toggle-adv-3");
const sliderAdvOne = document.querySelector(".slider__item-adv-1");
const sliderAdvTwo = document.querySelector(".slider__item-adv-2");
const sliderAdvThree = document.querySelector(".slider__item-adv-3");
const sliderAdv = document.querySelector(".slider-adv");

tgOne.addEventListener("click", function (evt) {
  evt.preventDefault();
if (sliderAdvOne.classList.contains("slider__item-adv--active")) {
  tgOne.classList.add("slider__toggle-adv--current");
  tgTwo.classList.remove("slider__toggle-adv--current");
  tgThree.classList.remove("slider__toggle-adv--current");
  sliderAdvOne.classList.add("slider__item-adv--active");
  sliderAdvTwo.classList.remove("slider__item-adv--active");
  sliderAdvThree.classList.remove("slider__item-adv--active");
}
else {
  tgOne.classList.add("slider__toggle-adv--current");
  tgTwo.classList.remove("slider__toggle-adv--current");
  tgThree.classList.remove("slider__toggle-adv--current");
  sliderAdvOne.classList.add("slider__item-adv--active");
  sliderAdvTwo.classList.remove("slider__item-adv--active");
  sliderAdvThree.classList.remove("slider__item-adv--active");
}
});

tgTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
if (sliderAdvOne.classList.contains("slider__item-adv--active")) {
  tgOne.classList.remove("slider__toggle-adv--current");
  tgTwo.classList.add("slider__toggle-adv--current");
  tgThree.classList.remove("slider__toggle-adv--current");
  sliderAdvTwo.classList.add("slider__item-adv--active");
  sliderAdvOne.classList.remove("slider__item-adv--active");
  sliderAdvThree.classList.remove("slider__item-adv--active");
}
else {
  tgOne.classList.remove("slider__toggle-adv--current");
  tgTwo.classList.add("slider__toggle-adv--current");
  tgThree.classList.remove("slider__toggle-adv--current");
  sliderAdvTwo.classList.add("slider__item-adv--active");
  sliderAdvOne.classList.remove("slider__item-adv--active");
  sliderAdvThree.classList.remove("slider__item-adv--active");
}
});

tgThree.addEventListener("click", function (evt) {
  evt.preventDefault();
if (sliderAdvThree.classList.contains("slider__item-adv--active")) {
  tgOne.classList.remove("slider__toggle-adv--current");
  tgTwo.classList.remove("slider__toggle-adv--current");
  tgThree.classList.add("slider__toggle-adv--current");
  sliderAdvTwo.classList.remove("slider__item-adv--active");
  sliderAdvOne.classList.remove("slider__item-adv--active");
  sliderAdvThree.classList.add("slider__item-adv--active");
}
else {
  tgOne.classList.remove("slider__toggle-adv--current");
  tgTwo.classList.remove("slider__toggle-adv--current");
  tgThree.classList.add("slider__toggle-adv--current");
  sliderAdvTwo.classList.remove("slider__item-adv--active");
  sliderAdvOne.classList.remove("slider__item-adv--active");
  sliderAdvThree.classList.add("slider__item-adv--active");
}
});
