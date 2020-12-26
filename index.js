let main = document.querySelector('.main');

//profile section
let profile = main.querySelector('.profile');
let containerText = profile.querySelector('.profile__container-text');
let profileTitle = containerText.querySelector('.profile__title');
let profileSubtitle = containerText.querySelector('.profile__subtitle');
let profileEditButton = containerText.querySelector('.profile__edit-button');

//overlay & popup section
let overlay = document.querySelector('.overlay');
let popup = overlay.querySelector('.popup');
let inputName = popup.querySelector('.popup__input-name');
let inputDescription = popup.querySelector('.popup__input-description');
let submitButton = popup.querySelector('.popup__submit-button');
let closeButton = popup.querySelector('.popup__close-button');

//popup appearance function
function popupVisibility() {
  overlay.classList.toggle('overlay_active');
}

//popup appearance handlers
profileEditButton.addEventListener('click', popupVisibility);
closeButton.addEventListener('click', popupVisibility);
overlay.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    popupVisibility();
  }
});

//profile edit function
function profileAction() {
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputDescription.value;
  popupVisibility();
}

//profile eddit handler
popup.addEventListener('submit', (event) => {
  event.preventDefault();
  profileAction()
});

//placeholders for inputs
inputName.placeholder = profileTitle.textContent;
inputDescription.placeholder = profileSubtitle.textContent;
