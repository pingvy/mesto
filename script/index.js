let main = document.querySelector('.main');

//profile section
let profile = main.querySelector('.profile');
let container = profile.querySelector('.profile__container');
let containerTitleAndButton = container.querySelector('.profile__title-and-button-container');
let profileTitle = containerTitleAndButton.querySelector('.profile__title');
let profileEditButton = containerTitleAndButton.querySelector('.profile__edit-button');
let profileSubtitle = container.querySelector('.profile__subtitle');
<<<<<<< HEAD
let addPhotoButton = profile.querySelector('.profile__addition-button');

//overlay & popup edit profile section
let overlayEditProfile = document.querySelector('.overlay_edit-profile');
let popupEditProfile = overlayEditProfile.querySelector('.popup_edit-profile');
let inputPersonName = document.querySelector('#person-name');
let inputProfileDescription = document.querySelector ('#profile-description');
let closeEditProfileButton = popupEditProfile.querySelector('.popup__close-button');

//overlay & popup add photo section
let overlayAddPhoto = document.querySelector('.overlay_add-photo');
let popupAddPhoto = overlayAddPhoto.querySelector('.popup_add-photo');
let inputPhotoName = document.querySelector('#photo-name');
let inputPhotoLink = document.querySelector ('#photo-link');
let closeAddPhotoButton = popupAddPhoto.querySelector('.popup__close-button');

//elements section
const elements = document.querySelector('.elements');
const elementsItems = elements.querySelector('.elements__items');

//template section 
const elementsTemplate = document.querySelector('#elements-template').content;
let elementLink = elementsTemplate.querySelector('.elements__image');
let elementTitle = elementsTemplate.querySelector('.elements__title');

//image-show section
const overlayShowPhoto = document.querySelector('.overlay_show-image');
const imagePopup = overlayShowPhoto.querySelector('.image-popup');
const closeImageButton = imagePopup.querySelector('.popup__close-button');
const itemImagePopup = imagePopup.querySelector('.image-popup__image');
const titleImagePopup = imagePopup.querySelector('.image-popup__title');

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

//image appearance 
function imageVisibility() {
  overlayShowPhoto.classList.toggle('overlay_active');
}

overlayShowPhoto.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    event.preventDefault();
    imageVisibility();
    debugger
  }
});

closeImageButton.addEventListener('click', (event) => {
  event.preventDefault();
  imageVisibility();
});

//initial cards
initialCards.forEach(function(item) {
  const elementCard = elementsTemplate.cloneNode(true);
  const elementLink = elementCard.querySelector('.elements__image');
  elementLink.src = item.link;

  elementLink.addEventListener('click', (event) => {
    event.preventDefault();
    imageVisibility();
    itemImagePopup.src = item.link;
    titleImagePopup.textContent = item.name;  
  });

  const elementTitle = elementCard.querySelector('.elements__title');
  elementTitle.textContent = item.name;

  const deleteButton = elementCard.querySelector('.elements__delete');
  deleteButton.addEventListener('click', (event) => {
    const closestElementsItem = deleteButton.closest('.elements__item');
    closestElementsItem.remove();
    initialCards.splice(closestElementsItem, 1);
    console.log(initialCards);
  });

  const elementLike = elementCard.querySelector('.elements__like');
  elementLike.addEventListener('click', (event) => {
    elementLike.classList.toggle('elements__like_active');
  });

  elementsItems.append(elementCard);
});




//popup appearance function
function popupEditProfileVisibility() {
  overlayEditProfile.classList.toggle('overlay_active');
  inputPersonName.value = profileTitle.textContent;
  inputProfileDescription.value = profileSubtitle.textContent;
=======

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
>>>>>>> fea8e7ef990185ca1dc1f7a04b18faa5a5b06075
}

//profile edit function
function profileAction() {
  event.preventDefault();
<<<<<<< HEAD
  profileTitle.textContent = inputPersonName.value;
  profileSubtitle.textContent = inputProfileDescription.value;
  popupEditProfileVisibility();
}

//popup appearance handlers
profileEditButton.addEventListener('click', popupEditProfileVisibility);
closeEditProfileButton.addEventListener('click', (event) => {
  event.preventDefault();
  popupEditProfileVisibility()
});

overlayEditProfile.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    popupEditProfileVisibility();
=======
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
>>>>>>> fea8e7ef990185ca1dc1f7a04b18faa5a5b06075
  }
});

//profile eddit handler
<<<<<<< HEAD
popupEditProfile.addEventListener('submit', (event) => {
  profileAction()
});



function popupAddPhotoVisibility() {
  overlayAddPhoto.classList.toggle('overlay_active');
}

function AddPhoto(title, link) {
  event.preventDefault();

  const elementCard = elementsTemplate.cloneNode(true);
  const elementLink = elementCard.querySelector('.elements__image');
  const elementTitle = elementCard.querySelector('.elements__title');

  elementTitle.textContent = title;
  elementLink.src = link;

  elementLink.addEventListener('click', (event) => {
    event.preventDefault();
    imageVisibility();
      itemImagePopup.src = link;
      titleImagePopup.textContent = title;
  });

  const deleteButton = elementCard.querySelector('.elements__delete');

  deleteButton.addEventListener('click', (event) => {
    const closestElementsItem = deleteButton.closest('.elements__item');
    closestElementsItem.remove();
    initialCards.splice(closestElementsItem, 1);
    console.log(initialCards);
  });
  
  elementsItems.prepend(elementCard);
  initialCards.unshift({name: title, link: link});
};

addPhotoButton.addEventListener('click', popupAddPhotoVisibility);
closeAddPhotoButton.addEventListener('click', popupAddPhotoVisibility);
overlayAddPhoto.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    popupAddPhotoVisibility();
  }
});

popupAddPhoto.addEventListener('submit', (event) => {
  AddPhoto(inputPhotoName.value, inputPhotoLink.value);
  popupAddPhotoVisibility();
=======
popup.addEventListener('submit', (event) => {
  profileAction()
>>>>>>> fea8e7ef990185ca1dc1f7a04b18faa5a5b06075
});