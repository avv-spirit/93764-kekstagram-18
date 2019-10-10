'use strict';
var ARR_NAMES = ['Joel', 'Ellie', 'Tess', 'Bill', 'Tommy', 'Sarah', 'Marlene', 'Henry', 'Sam', 'Maria', 'James', 'Robert', 'Niel', 'Ashley', 'Tom', 'Nathan', 'Bruce', 'Troy', 'Max', 'Vladimir', 'Alex', 'Zhanna', 'Serge', 'Leo', 'Keanu'];
var ARR_MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
var ARR_DESCRIPTIONS = ['Сегодня мы наконец-то здесь!', 'Добрались-таки)', 'А вот и фото', 'OMG!)))))', 'Это круто!', 'TOP!', 'Круто!', 'Вообще огонь'];
var MIN_NUM = 1;
var MAX_NUM = 6;
var MIN_JPG = 1;
var MAX_JPG = 25;
var COUNT_USERS = 25;

var toGetNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var calculateComments = function (rangeNum) {
  var arrNumbers = [];
  for (var i = 1; i <= rangeNum; i++) {
    var userObject = {
      'avatars': 'img/avatar-' + toGetNumber(MIN_NUM, MAX_NUM) + '.svg',
      'message': ARR_MESSAGES[toGetNumber(0, ARR_MESSAGES.length)],
      'name': ARR_NAMES[toGetNumber(0, ARR_NAMES.length)]
    };
    arrNumbers.push(userObject);
  }
  return arrNumbers;
};

var showNumbers = function (someNum) {
  var arrNumbers = [];
  for (var i = 1; i <= someNum; i++) {
    var generateObject = {
      url: 'photos/' + i + '.jpg',
      description: ARR_DESCRIPTIONS[toGetNumber(0, ARR_DESCRIPTIONS.length)],
      likes: toGetNumber(MIN_JPG, MAX_JPG),
      comments: calculateComments(COUNT_USERS)
    };
    arrNumbers.push(generateObject);
  }
  return arrNumbers;
};

var pictures = document.querySelector('.pictures');
var similarTemplate = document.querySelector('#picture').
  content.querySelector('.picture');

var generateImg = showNumbers(COUNT_USERS);

var renderImages = function (images) {
  var userElement = similarTemplate.cloneNode(true);
  userElement.querySelector('.picture__img').src = images.url;
  userElement.querySelector('.picture__likes').textContent = images.likes;
  userElement.querySelector('.picture__comments').textContent = images.comments;
  return userElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < generateImg.length; i++) {
  pictures.appendChild(renderImages(generateImg[i]));
}
pictures.appendChild(fragment);
