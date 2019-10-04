'use strict';
var ARR_NAMES = ['Joel', 'Ellie', 'Tess', 'Bill', 'Tommy', 'Sarah', 'Marlene', 'Henry', 'Sam', 'Maria', 'James', 'Robert', 'Niel', 'Ashley', 'Tom', 'Nathan', 'Bruce', 'Troy', 'Max', 'Vladimir', 'Alex', 'Zhanna', 'Serge', 'Leo', 'Keanu'];
var ARR_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];


var toGetNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
/*
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
*/

// Функцию ниже сделал для массива с числами

var calcNumbers = function () {
  var arrNumbers = [];
  for (var i = 1; i <= 25; i++) {
    arrNumbers.push(i);
  }
  return arrNumbers;
};

var userObject = {
  'avatars': 'img/avatar-' + toGetNumber(1, 6) + '.svg',
  'comments': ARR_COMMENTS[toGetNumber(0, ARR_COMMENTS.length)],
  'name': ARR_NAMES[toGetNumber(0, ARR_NAMES.length)]
};

// Денис, я дальше запустался, как дальше сделать массив объектов userObject на 25 раз и магические числа заменить с 1 до 6 через массив, который не будет вываливаться весь.
// Понимаю, что надо сделать функцию, в ней цикл по перебору длинны массива (arrNumbers.length в котором 25 чисел), но вот как назначить эти числа объекту хз. Нужна твоя помощь.
