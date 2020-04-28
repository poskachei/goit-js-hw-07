'use strict';

const selectByClass = document.querySelectorAll('.item');
console.log(`В списке ${selectByClass.length} категории`);
const titleOfList = Array.from(document.querySelectorAll('.item'));
titleOfList.map(item =>
  console.log(
    `В категории "${item.children[0].innerText}" находится ${item.children[1].children.length} элементов`,
  ),
);
