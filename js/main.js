'use strict';
var ARR_NAMES = ['Joel', 'Ellie', 'Tess', 'Bill', 'Tommy', 'Sarah', 'Marlene', 'Henry', 'Sam', 'Maria', 'James', 'Robert', 'Niel', 'Ashley', 'Tom', 'Nathan', 'Bruce', 'Troy', 'Max', 'Vladimir', 'Alex', 'Zhanna', 'Serge', 'Leo', 'Keanu'];
var ARR_MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
var ARR_DESCRIPTIONS = ['Сегодня мы наконец-то здесь!', 'Добрались-таки)', 'А вот и фото', 'OMG!)))))', 'Это круто!', 'TOP!', 'Круто!', 'Вообще огонь'];
var MIN_NUM = 1;
var MAX_NUM = 6;
var MIN_JPG = 1;
var MAX_JPG = 25;
var COUNT_USERS = 25;

var getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var calculateComments = function (rangeNum) {
  var arrComments = [];
  for (var i = 1; i <= rangeNum; i++) {
    var userObject = {
      'avatars': 'img/avatar-' + getRandom(MIN_NUM, MAX_NUM) + '.svg',
      'message': ARR_MESSAGES[getRandom(0, ARR_MESSAGES.length)],
      'name': ARR_NAMES[getRandom(0, ARR_NAMES.length)]
    };
    arrComments.push(userObject);
  }
  return arrComments;
};

var getPictures = function (someNum) {
  var arrNumbers = [];
  for (var i = 1; i <= someNum; i++) {
    var generateObject = {
      url: 'photos/' + i + '.jpg',
      description: ARR_DESCRIPTIONS[getRandom(0, ARR_DESCRIPTIONS.length)],
      likes: getRandom(MIN_JPG, MAX_JPG),
      comments: calculateComments(getRandom(MIN_JPG, MAX_JPG))
    };
    arrNumbers.push(generateObject);
  }
  return arrNumbers;
};

// Generating pictures

var pictures = document.querySelector('.pictures');
var similarTemplate = document.querySelector('#picture').
  content.querySelector('.picture');

var generateImg = getPictures(COUNT_USERS);

var renderImages = function (images) {
  var userElement = similarTemplate.cloneNode(true);
  userElement.querySelector('.picture__img').src = images.url;
  userElement.querySelector('.picture__likes').textContent = images.likes;
  userElement.querySelector('.picture__comments').textContent = images.comments.length;
  return userElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < generateImg.length; i++) {
  pictures.appendChild(renderImages(generateImg[i]));
}
pictures.appendChild(fragment);

// Generating big picture modal

var bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');
bigPicture.querySelector('.social__comment-count').classList.add('visually-hidden');
bigPicture.querySelector('.comments-loader').classList.add('visually-hidden');

var bigPictureComment = bigPicture.querySelector('.social__comments');
var socialComments = document.querySelector('.social__comments');
var socialComment = socialComments.querySelector('.social__comment');

// var generateComments = calculateComments(MIN_NUM);

var testObj = generateImg[MIN_NUM];

var renderTest = function (mega) {
  testObj = bigPicture.cloneNode(true);
  var soff = testObj;
  soff.querySelector('.big-picture__img').src = mega.url;
  soff.querySelector('.likes-count').textContent = mega.likes;
  soff.querySelector('.comments-count').textContent = mega.comments.length;
  soff.querySelector('.social__caption').textContent = mega.description;
  return soff;
};

var renImg = renderTest(testObj);

bigPicture.appendChild(renImg);

var getComments = function (comment) {
  var commentElement = bigPictureComment.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatars;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

var fragmentComment = document.createDocumentFragment();
for (var j = 0; j < generateImg.length; j++) {
  socialComments.removeChild(socialComment);
  socialComments.appendChild(getComments(generateImg[j]));
}
socialComment.appendChild(fragmentComment);

/*
var getComments = function (comment) {
  var commentElement = bigPictureComment.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatars;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

var fragmentComment = document.createDocumentFragment();
for (var j = 0; j < generateComments.length; j++) {
  socialComments.removeChild(socialComment);
  socialComments.appendChild(getComments(generateComments[j]));
}
socialComment.appendChild(fragmentComment);*/
/*
var image = document.querySelector('.social__picture');
image.src = 'img/avatar-' + getRandom(MIN_NUM, MAX_NUM) + '.svg';

var message = document.querySelector('.social__caption');
message.textContent = ARR_MESSAGES[getRandom(0, ARR_MESSAGES.length)];

var MINLIKES = 1;
var MAXLIKES = 300;

var likes = document.querySelector('.likes-count');
likes.textContent = getRandom(MINLIKES, MAXLIKES);

var bigImage = document.querySelector('.big-picture__img');
var test = bigImage.querySelector('img');
test.src = 'photos/' + getRandom(MIN_JPG, MAX_JPG) + '.jpg';
*/

/*
var fragmentTest = document.createDocumentFragment();
for (var f = 0; f <= testObj.length; f++) {
  bigPicture.appendChild(renderTest(testObj[f]));
}*/

/*
var renderComment = function (comments) {
  var userComment = bigPicture.cloneNode(true);
  userComment.querySelector('.big-picture__img').src = comments.url;
  userComment.querySelector('.likes-count').likes = comments.likes;
  userComment.querySelector('.comments-count').comments = comments.comments.length;
  userComment.querySelector('.social__caption').description = comments.description;
  return userComment;
};

var fragmentPics = document.createDocumentFragment();
for (var k = 0; k < generateComments.length; k++) {
  soll.removeChild();
  soll.appendChild(renderComment(renderComment[k]));
}
soll.appendChild(fragmentPics);
*/
