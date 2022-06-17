const updateLocal = require('./update');
const removetodo = require('./remove');
const edittodo = require('./edit');

const Array1 = [];
const todoCon = document.querySelector('.todo-container');
const getFromLocal = () => {
  const data = JSON.parse(localStorage.getItem('activities'));
  // eslint-disable-next-line array-callback-return
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

module.exports = getFromLocal;