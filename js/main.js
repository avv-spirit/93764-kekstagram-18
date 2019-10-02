'use strict';
var arrNames = ['Joel', 'Ellie', 'Tess', 'Bill', 'Tommy', 'Sarah', 'Marlene', 'Henry', 'Sam', 'Maria', 'James', 'Robert', 'Niel', 'Ashley', 'Tom', 'Nathan', 'Bruce', 'Troy', 'Max', 'Vladimir', 'Alex', 'Zhanna', 'Serge', 'Leo', 'Keanu'];
var arrComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

var toGetNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var calcUrl = function (amountNumbers) {
  var arrPhotoNumbers = [];
  for (var i = 1; i <= amountNumbers; i++) {
    var photosUrl = 'photos/' + i + '.jpg';
    arrPhotoNumbers.push(photosUrl);
  }
  return amountNumbers;
};

var calcAvatars = function (amountAvatars) {
  var namesAvatars = [];
  for (var j = 0; j <= amountAvatars; j++) {
    var avatars = 'img/avatar-' + j + '.svg';
    namesAvatars.push(avatars);
  }
  return amountAvatars;
};

var userObject = {
  'avatars': 'img/avatar-' + toGetNumber(1, 6) + '.svg',
  'comments': arrComments[toGetNumber(0, arrComments.length)],
  'name': arrNames[toGetNumber(0, arrNames.length)]
};

