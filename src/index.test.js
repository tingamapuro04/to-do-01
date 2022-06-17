/**
 * @jest-environment jsdom
 */

const addToList = require('./modules/add');
const myObject = require('./modules/function');


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
  const todo = new myObject(task, false, 1);
  test('Add an activity', () => {
    addToList(todo);
    const LocalData = JSON.parse(localStorage.getItem('Activities'));
    expect(LocalData.length).toEqual(1);
  })
})
