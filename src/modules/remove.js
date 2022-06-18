
const removetodo = (todo) => {
  const todoCon = document.querySelector('.todo-container');
  todoCon.removeChild(todo);
  let count = 0;
  const localData = JSON.parse(localStorage.getItem('activities'));
  const data = Array.from(localData).filter((i) => i.completed === false);
  data.map((i) => i.index = count += 1);
  localStorage.setItem('activities', JSON.stringify(data));
};

module.exports = removetodo;