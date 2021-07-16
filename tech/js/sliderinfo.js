

const deliveryBtn =  document.querySelector(".delivery-btn");
const garanteeBtn =  document.querySelector(".garantee-btn");
const loanBtn =  document.querySelector(".loan-btn");

const sliderServices = document.querySelector(".slider-services");
const sliderItemFirst = document.querySelector (".slider-item-1");
const sliderItemSecond = document.querySelector (".slider-item-2");
const sliderItemThird =document.querySelector (".slider-item-3");

const sliderInfoBtn = document.querySelector(".slider-controls-services .button");
const sliderItemInfo = document.querySelector(".slider-item-info");


 garanteeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  sliderItemFirst.classList.add("slide");
  sliderItemThird.classList.add("slide");
  sliderItemSecond.classList.add("slide-info-current");
  sliderItemSecond.classList.remove("slide");
  garanteeBtn.classList.add("current-info-btn");
  garanteeBtn.classList.remove("button");
  deliveryBtn.classList.add("button");
  loanBtn.classList.add("button");
   loanBtn.classList.remove("current-info-btn");


});

loanBtn.addEventListener("click", function (evt) {
 evt.preventDefault();
 sliderItemFirst.classList.add("slide");
sliderItemSecond.classList.add("slide");
 sliderItemThird.classList.remove("slide");
 sliderItemThird.classList.add("slide-info-current");
 deliveryBtn.classList.add("button");
 deliveryBtn.classList.remove("current-info-btn");
 loanBtn.classList.add("current-info-btn");
 loanBtn.classList.remove("button");
 garanteeBtn.classList.remove("current-info-btn");
 garanteeBtn.classList.add("button");


});

deliveryBtn.addEventListener("click", function (evt) {
 evt.preventDefault();

 sliderItemFirst.classList.remove("slide")
 sliderItemFirst.classList.add("slide-info-current")
 sliderItemThird.classList.add("slide");
 sliderItemSecond.classList.add("slide");
 garanteeBtn.classList.remove("current-info-btn");
 garanteeBtn.classList.add("button");
 deliveryBtn.classList.remove("button");
 deliveryBtn.classList.add("current-info-btn");
 loanBtn.classList.remove("current-info-btn");
 loanBtn.classList.add("button");

});
