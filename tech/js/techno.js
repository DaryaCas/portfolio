const cardsOnMouse = document.querySelector(".catalog .perforators-list");
const modalcards = document.querySelector(".modalcards");


/*1*/

var cardsLi = document.querySelector(".perforators-item-1");
var divCard = document.querySelector(".perforators-item-1 div");

cardsLi.addEventListener("mouseenter", function (event){
  cardsLi.classList.add("shadow");
  modalcards.classList.remove("visually-hidden");
  divCard.replaceWith(modalcards);



});

cardsLi.addEventListener("mouseleave", function (event){
cardsLi.classList.remove("shadow");
  modalcards.replaceWith(divCard);

});


/*2*/
var cardsLiTwo = document.querySelector(".perforators-item-2");
var divCardTwo = document.querySelector(".perforators-item-2 div");

cardsLiTwo.addEventListener("mouseenter", function (event){
  modalcards.classList.remove("visually-hidden");
  cardsLiTwo.classList.add("shadow");
  divCardTwo.replaceWith(modalcards);



});

cardsLiTwo.addEventListener("mouseleave", function (event){
cardsLiTwo.classList.remove("shadow");
  modalcards.replaceWith(divCardTwo);

});

/*3*/
var cardsLiThree = document.querySelector(".perforators-item-3");
var divCardThree = document.querySelector(".perforators-item-3 div");

cardsLiThree.addEventListener("mouseenter", function (event){
  modalcards.classList.remove("visually-hidden");
  cardsLiThree.classList.add("shadow");
  divCardThree.replaceWith(modalcards);



});

cardsLiThree.addEventListener("mouseleave", function (event){
cardsLiThree.classList.remove("shadow");
  modalcards.replaceWith(divCardThree);

});

/*4*/
var cardsLiFour = document.querySelector(".perforators-item-4");
var divCardFour = document.querySelector(".perforators-item-4 div");

cardsLiFour.addEventListener("mouseenter", function (event){
  modalcards.classList.remove("visually-hidden");
  cardsLiFour.classList.add("shadow");
  divCardFour.replaceWith(modalcards);



});

cardsLiFour.addEventListener("mouseleave", function (event){
cardsLiFour.classList.remove("shadow");
  modalcards.replaceWith(divCardFour);

});
/*5*/

var cardsLiFive = document.querySelector(".perforators-item-5");
var divCardFive = document.querySelector(".perforators-item-5 div");

cardsLiFive.addEventListener("mouseenter", function (event){
  modalcards.classList.remove("visually-hidden");
  cardsLiFive.classList.add("shadow");
  divCardFive.replaceWith(modalcards);



});

cardsLiFive.addEventListener("mouseleave", function (event){
cardsLiFive.classList.remove("shadow");
  modalcards.replaceWith(divCardFive);

});
/*6*/

var cardsLiSix = document.querySelector(".perforators-item-6");
var divCardSix = document.querySelector(".perforators-item-6 div");

cardsLiSix.addEventListener("mouseenter", function (event){
  modalcards.classList.remove("visually-hidden");
  cardsLiSix.classList.add("shadow");
  divCardSix.replaceWith(modalcards);



});

cardsLiSix.addEventListener("mouseleave", function (event){
cardsLiSix.classList.remove("shadow");
  modalcards.replaceWith(divCardSix);

});
/*7*/
var cardsLiSev = document.querySelector(".perforators-item-7");
var divCardSev = document.querySelector(".perforators-item-7 div");

cardsLiSev.addEventListener("mouseenter", function (event){
  modalcards.classList.remove("visually-hidden");
  cardsLiSev.classList.add("shadow");
  divCardSev.replaceWith(modalcards);



});

cardsLiSev.addEventListener("mouseleave", function (event){
cardsLiSev.classList.remove("shadow");
  modalcards.replaceWith(divCardSev);

});

/*8*/

var cardsLiEig = document.querySelector(".perforators-item-8");
var divCardEig = document.querySelector(".perforators-item-8 div");

cardsLiEig.addEventListener("mouseenter", function (event){
  modalcards.classList.remove("visually-hidden");
  cardsLiEig.classList.add("shadow");
  divCardEig.replaceWith(modalcards);



});

cardsLiEig.addEventListener("mouseleave", function (event){
cardsLiEig.classList.remove("shadow");
  modalcards.replaceWith(divCardEig);

});
/*9*/

var cardsLiNine = document.querySelector(".perforators-item-9");
var divCardNine  = document.querySelector(".perforators-item-9 div");

cardsLiNine .addEventListener("mouseenter", function (event){
  modalcards.classList.remove("visually-hidden");
  cardsLiNine .classList.add("shadow");
  divCardNine .replaceWith(modalcards);



});

cardsLiNine .addEventListener("mouseleave", function (event){
cardsLiNine .classList.remove("shadow");
  modalcards.replaceWith(divCardNine );

});

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

const mapLink = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal--show");
});

mapClose.addEventListener("click", function() {
  mapPopup.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal--show");
    }
  }
});





const contactsBtn = document.querySelector(".button-contacts");
const contactsPopup = document.querySelector(".modal-contacts");
const contactsClose = contactsPopup.querySelector(".modal-close");
const contactsName = contactsPopup.querySelector(".name");
const contactsEmail = contactsPopup.querySelector(".email");
const contactsForm = contactsPopup.querySelector(".contacts-form");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactsBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsPopup.classList.add("modal-show");
  if (storage) {
   contactsName.value = storage;
   contactsEmail.focus();
 } else {
   contactsName.focus();
 }
});

contactsClose.addEventListener("click", function () {
  contactsPopup.classList.remove("modal-show");
  contactsPopup.classList.remove("modal-error");
});

contactsForm.addEventListener("submit", function (evt) {
  if (!contactsName.value || !contactsEmail.value) {
   evt.preventDefault();
   contactsPopup.classList.remove("modal-error");
   contactsPopup.offsetWidth = contactsPopup.offsetWidth;
   contactsPopup.classList.add("modal-error");
 } else {
    if (isStorageSupport)
    localStorage.setItem("name", contactsName.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (contactsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
    contactsPopup.classList.remove("modal-show");
    contactsPopup.classList.remove("modal-error");
    }
  }
});

const basketModal = document.querySelector(".modal-basket");
const btnBuy = document.querySelector(".modalcards .button-buy");
const btnCloseBasket = document.querySelector(".modal-basket button");
const basket = document.querySelector(".inner-page .basket");


btnBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketModal.classList.add("modal-up");
});

btnCloseBasket.addEventListener("click", function() {
  basketModal.classList.remove("modal-up");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (basketModal.classList.contains("modal-up")) {
      evt.preventDefault();
      basketModal.classList.remove("modal-up");
    }
  }
});


btnBuy.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket.classList.remove("basket-black");

  basket.classList.add("color");
});
