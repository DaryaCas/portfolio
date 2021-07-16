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
