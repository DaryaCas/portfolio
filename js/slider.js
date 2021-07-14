

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("slider-review__item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}

const btnOne = document.querySelector(".slider__toggle-1");
const btnTwo = document.querySelector(".slider__toggle-2");
const btnThree = document.querySelector(".slider__toggle-3");
const toggles = document.querySelector(".reviews__toggles");

btnOne.addEventListener("click", function (evt) {
  evt.preventDefault();

  btnOne.classList.add("slider__toggle--current");
  btnTwo.classList.remove("slider__toggle--current");
  btnThree.classList.remove("slider__toggle--current");
});

btnTwo.addEventListener("click", function (evt) {
  evt.preventDefault();

  btnTwo.classList.add("slider__toggle--current");
  btnOne.classList.remove("slider__toggle--current");
  btnThree.classList.remove("slider__toggle--current");
});

btnThree.addEventListener("click", function (evt) {
  evt.preventDefault();

  btnThree.classList.add("slider__toggle--current");
  btnOne.classList.remove("slider__toggle--current");
  btnTwo.classList.remove("slider__toggle--current");
});
