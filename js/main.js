'use strict';
var ARR_NAMES = ['Joel', 'Ellie', 'Tess', 'Bill', 'Tommy', 'Sarah', 'Marlene', 'Henry', 'Sam', 'Maria', 'James', 'Robert', 'Niel', 'Ashley', 'Tom', 'Nathan', 'Bruce', 'Troy', 'Max', 'Vladimir', 'Alex', 'Zhanna', 'Serge', 'Leo', 'Keanu'];
var ARR_MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];
var ARR_DESCRIPTIONS = ['Сегодня мы наконец-то здесь!', 'Добрались-таки)', 'А вот и фото', 'OMG!)))))', 'Это круто!', 'TOP!', 'Круто!', 'Вообще огонь'];
var MIN_NUM = 1;
var MAX_NUM = 6;
var MIN_JPG = 1;
var MAX_JPG = 25;

var toGetNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var calculateNumbers = function (someNum) {
  var arrNumbers = [];
  for (var i = 1; i <= someNum; i++) {
    var userObject = {
      'avatars': 'img/avatar-' + toGetNumber(MIN_NUM, MAX_NUM) + '.svg',
      'comments': ARR_MESSAGES[toGetNumber(0, ARR_MESSAGES.length)],
      'name': ARR_NAMES[toGetNumber(0, ARR_NAMES.length)]
    };
    arrNumbers.push(userObject);
  }
  return arrNumbers;
};

var resultNumbers = function (someNum) {
  var arrNumbers = [];
  for (var i = 1; i <= someNum; i++) {
    var generObject = {
      url: 'photos/' + toGetNumber(MIN_JPG, MAX_JPG) + '.jpg',
      description: ARR_DESCRIPTIONS[toGetNumber(0, ARR_DESCRIPTIONS.length)],
      likes: toGetNumber(MIN_NUM, MAX_NUM),
      comments: calculateNumbers(25)
    };
    arrNumbers.push(generObject);
  }
  return arrNumbers;
};
