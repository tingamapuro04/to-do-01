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

module.exports = updateLocal;