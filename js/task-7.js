'use strict';

const isControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

isControl.value = '0';
text.style.fontSize = `${isControl.value}px`;

const changeFontSize = () => (text.style.fontSize = `${isControl.value}px`);

isControl.addEventListener('input', changeFontSize);
