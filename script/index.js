const main = document.querySelector('.main');

const profile = main.querySelector('.profile');
const container = profile.querySelector('.profile__container');
const containerTitleAndButton = container.querySelector('.profile__title-and-button-container');
const profileTitle = containerTitleAndButton.querySelector('.profile__title');
const profileEditButton = containerTitleAndButton.querySelector('.profile__edit-button');
const profileSubtitle = container.querySelector('.profile__subtitle');
const addImageButton = profile.querySelector('.profile__addition-button');

//overlay & popup edit profile section
const overlayEditProfile = document.querySelector('.overlay_edit-profile');
const popupEditProfile = overlayEditProfile.querySelector('.popup_edit-profile');
const inputPersonName = document.querySelector('#person-name');
const inputProfileDescription = document.querySelector ('#profile-description');
const closeEditProfileButton = popupEditProfile.querySelector('.popup__close-button');

const overlayAddImage = document.querySelector('.overlay_add-image');
const popupAddImage = overlayAddImage.querySelector('.popup_add-image');
const inputImageName = document.querySelector('#image-name');
const inputImageLink = document.querySelector ('#image-link');
const closeAddImageButton = popupAddImage.querySelector('.popup__close-button');

//elements section
const elements = document.querySelector('.elements');
const elementsItems = elements.querySelector('.elements__items');

//image-show section
const overlayShowImage = document.querySelector('.overlay_show-image');
const imagePopup = overlayShowImage.querySelector('.image-popup');
const closeImageButton = imagePopup.querySelector('.popup__close-button');
const itemImagePopup = imagePopup.querySelector('.image-popup__image');
const titleImagePopup = imagePopup.querySelector('.image-popup__title');


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

//popups visibility function
function popupVisibility(overlayName) {
  overlayName.classList.toggle('overlay_active');
  if (overlayName == overlayEditProfile) {
    inputPersonName.value = profileTitle.textContent;
    inputProfileDescription.value = profileSubtitle.textContent;
  }
}

//overlays closing function
function overlayClose(overlayName) {
  overlayName.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        popupVisibility(overlayName);
    }
  });
}

//function for open and close popups
function activityPopup(buttonName, overlayName) {
  buttonName.addEventListener('click', (event) => {
    event.preventDefault();
    popupVisibility(overlayName);
  });
}

//edit profile information function
function profileAction() {
  event.preventDefault();
  profileTitle.textContent = inputPersonName.value;
  profileSubtitle.textContent = inputProfileDescription.value;
  popupVisibility(overlayEditProfile);
}

//add image function
function imageActivity(item, link) {
  const elementsTemplate = document.querySelector('#elements-template').content;
  const elementCard = elementsTemplate.cloneNode(true);
  const elementLink = elementCard.querySelector('.elements__image');
  const elementTitle = elementCard.querySelector('.elements__title');
  const deleteButton = elementCard.querySelector('.elements__delete');
  const elementLike = elementCard.querySelector('.elements__like');

  elementLink.src = link;
  elementTitle.textContent = item;
  elementsItems.prepend(elementCard);

  elementLink.addEventListener('click', (event) => {
    event.preventDefault();
    popupVisibility(overlayShowImage);
    itemImagePopup.src = link;
    titleImagePopup.textContent = item;  
  });

  deleteButton.addEventListener('click', (event) => {
    const closestElementsItem = deleteButton.closest('.elements__item');
    closestElementsItem.remove();
    initialCards.splice(closestElementsItem, 1);
  });

  elementLike.addEventListener('click', (event) => {
    elementLike.classList.toggle('elements__like_active');
  });
}

//overlay close handlers
overlayClose(overlayEditProfile);
overlayClose(overlayShowImage);
overlayClose(overlayAddImage);

//buttons handlers
activityPopup(profileEditButton, overlayEditProfile);
activityPopup(addImageButton, overlayAddImage);
activityPopup(closeEditProfileButton, overlayEditProfile);
activityPopup(closeImageButton, overlayShowImage);
activityPopup(closeAddImageButton, overlayAddImage);

//profile eddit handler
popupEditProfile.addEventListener('submit', (event) => {
  profileAction();
});

//initial image handler
initialCards.forEach(function(item) {
  imageActivity(item.name, item.link);
});

//new image handler
function AddImage(title, link) {
  event.preventDefault();
  imageActivity(title, link);
  initialCards.unshift({name: title, link: link});
}

//popup submit handler
popupAddImage.addEventListener('submit', (event) => {
  AddImage(inputImageName.value, inputImageLink.value);
  popupVisibility(overlayAddImage);
});