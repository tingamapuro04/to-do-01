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

module.exports = edittodo;