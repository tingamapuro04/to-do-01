/*eslint-disable*/
import _ from 'lodash';
import './style.css';
import myObject from './modules/function';

const whole = document.querySelector('.toDo');
const textInput = document.querySelector('.addtext');
const form = document.querySelector('.form1');
const submit = document.querySelector('.submit');
const todoCon = document.querySelector('.todo-container');

// class object

const Array1 = [];
const addToList = (todovalue) => {
  const todocontainer = document.createElement('div');
  todocontainer.className = 'todocontainer';
  todocontainer.innerHTML += `
    <input type="checkbox" class="check">
    <span>${todovalue}</span>
    <i class="fa-solid fa-ellipsis-vertical menu"></i>
    <i class="fa-solid fa-trash-can delete"></i>
  `;
  todoCon.appendChild(todocontainer);

  const checkbox = document.querySelectorAll('.check');
  checkbox.forEach((i) => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checkedcontainer');
      i.nextElementSibling.classList.toggle('inputvalue');
      i.parentElement.lastElementChild.classList.toggle('trash');
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('edit-disable');
      updateLocal();
    });
  });

  const object = new myObject(todovalue, false, checkbox.length - 1);
  Array1.push(object);
  localStorage.setItem('activities', JSON.stringify(Array1));

  const edit = document.querySelectorAll('.menu');
  edit.forEach((i) => {
    i.addEventListener('click', () => {
      edittodo(todocontainer, i.previousElementSibling);
      i.parentElement.classList.add('checkedcontainer');
    });
  });

  const removePng = document.querySelectorAll('.delete');
  removePng.forEach((i) => {
    i.addEventListener('click', () => {
      removetodo(i.parentElement);
    });
  });
  localStorage.setItem('activities', JSON.stringify(Array1));
};

const edittodo = (todocontainer, todo) => {
  const editinput = document.createElement('input');
  editinput.type = 'text';
  editinput.className = 'edittext';
  editinput.value = todo.textContent;
  todocontainer.replaceChild(editinput, todo);
  editinput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const todocontainers = document.querySelectorAll('.todocontainer');
      const localData = JSON.parse(localStorage.getItem('activities'));
      for (let i = 0; i < todocontainers.length; i++) {
        if (todocontainers[i].classList.contains('checkedcontainer')) {
          localData[i].description = editinput.value;
          localStorage.setItem('activities', JSON.stringify(localData));
        }
      }
      editinput.parentElement.classList.remove('checkedcontainer');
      todocontainer.replaceChild(todo, editinput);
      todo.textContent = editinput.value;
    }
  });
};

const removetodo = (todo) => {
  todoCon.removeChild(todo);
  let count = 0;
  const localData = JSON.parse(localStorage.getItem('activities'));
  const data = Array.from(localData).filter((i) => i.completed === false);
  data.map((i) => i.index = count += 1);
  localStorage.setItem('activities', JSON.stringify(data));
};

textInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textInput.value) {
    addToList(textInput.value);
    textInput.value = null;
  }
});

const getFromLocal = () => {
  const data = JSON.parse(localStorage.getItem('activities'));
  data.map((i) => {
    Array1.push(i);
    const todocontainer = document.createElement('div');
    todocontainer.className = 'todocontainer';
    todocontainer.innerHTML += `
      <input type="checkbox" class="check">
      <span>${i.description}</span>
      <i class="fa-solid fa-ellipsis-vertical menu"></i>
      <i class="fa-solid fa-trash-can delete"></i>
    `;
    todoCon.appendChild(todocontainer);

    const edit = document.querySelectorAll('.menu');
    edit.forEach((i) => {
      i.addEventListener('click', () => {
        edittodo(todocontainer, i.previousElementSibling);
        i.parentElement.classList.add('checkedcontainer');
      });
    });
  });

  const checkbox = document.querySelectorAll('.check');
  checkbox.forEach((i) => {
    i.addEventListener('click', () => {
      i.parentElement.classList.toggle('checkedcontainer');
      i.nextElementSibling.classList.toggle('inputvalue');
      i.parentElement.lastElementChild.classList.toggle('trash');
      i.parentElement.lastElementChild.previousElementSibling.classList.toggle('edit-disable');
      updateLocal();
    });
  });

  const removePng = document.querySelectorAll('.delete');
  removePng.forEach((i) => {
    i.addEventListener('click', () => {
      removetodo(i.parentElement);
    });
  });

  localStorage.setItem('activities', JSON.stringify(Array1));
};

window.addEventListener('load', getFromLocal);
const updateLocal = () => {
  const localData = JSON.parse(localStorage.getItem('activities'));
  const todos = document.querySelectorAll('span');
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].classList.contains('inputvalue')) {
      localData[i].completed = true;
    } else {
      localData[i].completed = false;
    }
  }

  localStorage.setItem('activities', JSON.stringify(localData));
};

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