



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
