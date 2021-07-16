

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
