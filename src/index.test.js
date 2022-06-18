/**
 * @jest-environment jsdom
 */

const addToList = require('./modules/add');
const myObject = require('./modules/function');
const removetodo = require('./modules/remove');
const updateLocal = require('./modules/update');

describe('Test', () => {
  document.body.innerHTML = `<div class="toDo">
        <div class="top">
            <h3>Today's to do</h3>
            <i class="fa-solid fa-arrows-rotate"></i>
        </div>
        <div class="form">
            <form class="form1">
                <input type="text" name="" id="" class="addtext" placeholder="Add to your list...">
                <div class="todo-container"></div>
                <button type="button" class="submit">Clear all completed</button>
            </form>
        </div>
    </div>`;
  const task = 'eat';
  const todo = new myObject(task);
  const todo1 = new myObject('mobutu');
  test('Add an activity', () => {
    addToList(todo);
    const LocalData = JSON.parse(localStorage.getItem('activities'));
    expect(LocalData.length).toBe(1);
  });

  test('Remove an item', () => {
    addToList(todo);
    addToList(todo1);
    const localData = JSON.parse(localStorage.getItem('activities'));
    expect(localData).toBe('mobutu');
  });
});
