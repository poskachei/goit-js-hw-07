'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const strToIns = () =>
  ingredients.forEach(item => {
    const eachElement = document.createElement('li');
    console.log(eachElement);
    eachElement.innerHTML = item;
    return document.getElementById('ingredients').appendChild(eachElement);
  });

strToIns(ingredients);
