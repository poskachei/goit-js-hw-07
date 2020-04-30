'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
const items = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  return item;
});

list.append(...items);
