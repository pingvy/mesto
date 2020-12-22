let main = document.querySelector('.main');

//profile block:
let profile = main.querySelector('.profile');
let profileContainerText = profile.querySelector('.profile__container-text');
let profileTitle = profileContainerText.querySelector('.profile__title');
let profileDescription = profileContainerText.querySelector('.profile__subtitle');
let profileEditButton = profileContainerText.querySelector('.profile__edit-button');

//popup block:
let overlay = document.querySelector('.overlay');
let popup = overlay.querySelector('.popup');
let popupExitButton = popup.querySelector('.popup__exit-button');
let submitButton = popup.querySelector('.popup__submit');
let inputName = popup.querySelector('.popup__input-name');
let inputDescription = popup.querySelector('.popup__input-description');

//popup placeholder's names: 
inputName.placeholder = profileTitle.textContent;
inputDescription.placeholder = profileDescription.textContent;

//show or hide popup:
function popupVisibility() {
  overlay.classList.toggle('overlay_hidden');
}

//popup handlers:
profileEditButton.addEventListener('click', popupVisibility);
overlay.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    popupVisibility();
  }
});

//edit profile after submit:
function profileEdit() {  
    profileTitle.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    popupVisibility();
}


//popup submit:
popup.addEventListener('submit', event => {
  event.preventDefault();
  profileEdit();
});