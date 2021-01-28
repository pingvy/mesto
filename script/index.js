const main = document.querySelector('.main');

const profile = main.querySelector('.profile');
const container = profile.querySelector('.profile__container');
const containerTitleAndButton = container.querySelector('.profile__title-and-button-container');
const profileTitle = containerTitleAndButton.querySelector('.profile__title');
const profileEditButton = containerTitleAndButton.querySelector('.profile__edit-button');
const profileSubtitle = container.querySelector('.profile__subtitle');
const addImageButton = profile.querySelector('.profile__addition-button');

//overlay & popup edit profile section
const overlayEditProfile = document.querySelector('#overlay-edit-profile');
const popupEditProfile = overlayEditProfile.querySelector('.popup_type_form');
const inputPersonName = document.querySelector('#person-name');
const inputProfileDescription = document.querySelector ('#profile-description');
const closeEditProfileButton = popupEditProfile.querySelector('.popup__close-button');

const overlayAddImage = document.querySelector('#overlay-add-image');
const popupAddImage = overlayAddImage.querySelector('.popup_type_form');
const inputImageName = document.querySelector('#image-name');
const inputImageLink = document.querySelector ('#image-link');
const closeAddImageButton = popupAddImage.querySelector('.popup__close-button');

//elements section
const elements = document.querySelector('.elements');
const elementsItems = elements.querySelector('.elements__items');

//image-show section
const overlayShowImage = document.querySelector('#overlay-show-image');
const imagePopup = overlayShowImage.querySelector('.popup_type_show-image');
const closeImageButton = imagePopup.querySelector('.popup__close-button');
const itemImagePopup = imagePopup.querySelector('.popup__image');
const titleImagePopup = imagePopup.querySelector('.popup__title_type_show-image');


//initial images array
const initialCards = [
  {
    name: 'Данься',
    link: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-zhangye-gettyimages-175323801-1505334995.jpg?crop=1xw:1xh;center,top&resize=980:*'
  },
  {
    name: 'Памуккале',
    link: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-pamukkale-gettyimages-466129341-1505338681.jpg?crop=1xw:1xh;center,top&resize=980:*'
  },
  {
    name: 'Байкал',
    link: 'https://cdn.recyclemag.ru/main/d/dc271263e154acae403752b1b6dad8c9_photo.jpg'
  },
  {
    name: 'Торрес дель Пайне',
    link: 'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/mirador-las-torres-gettyimages-512588114.jpg?crop=1.0xw:1xh;center,top&resize=980:*'
  },
  {
    name: 'Исландия',
    link: 'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/iceland-gettyimages-511371497_1.jpg?crop=1.0xw:1xh;center,top&resize=980:*'
  },
  {
    name: 'Мечеть шейха Зайда',
    link: 'https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/16/abu-dhabi-gettyimages-487888511_1.jpg?crop=1xw:0.9998272287491361xh;center,top&resize=980:*'
  }
]; 

function popupOpen(overlayName) {
  overlayName.classList.add('overlay_active');
  overlayName.addEventListener('click', (event) => { 
    overlayClose(overlayName);
    });
}


function popupClose(overlayName) {
  overlayName.classList.remove('overlay_active');
  overlayName.removeEventListener('click', (event) => { 
    overlayClose(overlayName);
    });
}

function overlayClose(overlayName) {
  if (event.target === event.currentTarget) {
    popupClose(overlayName)
  }
}

//edit profile information function
function profileAction() {
  profileTitle.textContent = inputPersonName.value;
  profileSubtitle.textContent = inputProfileDescription.value;
}

//create card function
function createCard(item, link) {
  const elementsTemplate = document.querySelector('#elements-template').content;
  const elementCard = elementsTemplate.cloneNode(true);
  const elementLink = elementCard.querySelector('.elements__image');
  const elementTitle = elementCard.querySelector('.elements__title');
  const deleteButton = elementCard.querySelector('.elements__delete');
  const elementLike = elementCard.querySelector('.elements__like');

  elementLink.src = link;
  elementLink.alt = 'Image';
  elementTitle.textContent = item;

  elementLink.addEventListener('click', () => {
    popupOpen(overlayShowImage);
    itemImagePopup.src = link;
    titleImagePopup.textContent = item;  
    itemImagePopup.alt = 'Image';
  });

  deleteButton.addEventListener('click', () => {
    deleteButton.closest('.elements__item').remove();
  });

  elementLike.addEventListener('click', () => {
  elementLike.classList.toggle('elements__like_active');
  });

  return elementCard;
}

//add new card function
function addCard(container, elementCard) {
  container.prepend(elementCard);
}

//add initial cards function
  initialCards.forEach(function(item) {
    addCard(elementsItems, createCard(item.name, item.link));
});

//add image popup submit handler
popupAddImage.addEventListener('submit', (event) => {
  event.preventDefault();
  addCard(elementsItems, createCard(inputImageName.value, inputImageLink.value));
  popupClose(overlayAddImage);
});

//buttons handlers 
profileEditButton.addEventListener('click', () => {
  popupOpen(overlayEditProfile);
  inputPersonName.value = profileTitle.textContent;
  inputProfileDescription.value = profileSubtitle.textContent;
});

addImageButton.addEventListener('click', () => {
  popupOpen(overlayAddImage);
});

closeEditProfileButton.addEventListener('click', () => {
  popupClose(overlayEditProfile);
});

closeImageButton.addEventListener('click', () => {
  popupClose(overlayShowImage);
});

closeAddImageButton.addEventListener('click', () => {
  popupClose(overlayAddImage);
});

//profile eddit handler
popupEditProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  profileAction();
  popupClose(overlayEditProfile);
});