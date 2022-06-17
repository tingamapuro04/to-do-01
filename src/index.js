/*eslint-disable*/
import _ from 'lodash';
import './style.css';
import myObject from './modules/function';
import addToList from './modules/add';
import  updateLocal  from './modules/update';
import  getFromLocal  from './modules/fromLocal';
import  removetodo  from './modules/remove';
import  edittodo  from './modules/edit';

const whole = document.querySelector('.toDo');
const textInput = document.querySelector('.addtext');
const form = document.querySelector('.form1');
const submit = document.querySelector('.submit');
const todoCon = document.querySelector('.todo-container');

// class object

const Array1 = [];


textInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textInput.value) {
    addToList(textInput.value);
    textInput.value = null;
  }
});



window.addEventListener('load', getFromLocal);


const clear = () => {
  const localData = JSON.parse(localStorage.getItem('activities'));
  const todocontainer = document.querySelectorAll('.todocontainer');

  todocontainer.forEach((i) => {
    if (i.classList.contains('checkedcontainer')) {
      removetodo(i);
    }
  });

  let count = 0;
  const data = Array.from(localData).filter((i) => i.completed === false);
  data.map((i) => i.index = count += 1);
  localStorage.setItem('activities', JSON.stringify(data));
};

submit.addEventListener('click', clear);

form.addEventListener('submit', (e) => {
  e.preventDefault()
})