let main = document.querySelector('.main');

//profile section
let profile = main.querySelector('.profile');
let container = profile.querySelector('.profile__container');
let containerTitleAndButton = container.querySelector('.profile__title-and-button-container');
let profileTitle = containerTitleAndButton.querySelector('.profile__title');
let profileEditButton = containerTitleAndButton.querySelector('.profile__edit-button');
let profileSubtitle = container.querySelector('.profile__subtitle');

//overlay & popup section
let overlay = document.querySelector('.overlay');
let popup = overlay.querySelector('.popup');
let inputName = popup.querySelector('.popup__input_name');
let inputDescription = popup.querySelector('.popup__input_description');
let submitButton = popup.querySelector('.popup__submit-button');
let closeButton = popup.querySelector('.popup__close-button');

//popup appearance function
function popupOpen() {
  overlay.classList.add('overlay_active');
  inputName.value = profileTitle.textContent;
  inputDescription.value = profileSubtitle.textContent;
}

function popupClose() {
  overlay.classList.remove('overlay_active');
}

//profile edit function
function profileAction() {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  popupClose();
}

//popup appearance handlers
profileEditButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', (event) => {
  event.preventDefault();
  popupClose()
});

overlay.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    popupClose();
  }
});

//profile eddit handler
popup.addEventListener('submit', (event) => {
  profileAction()
});