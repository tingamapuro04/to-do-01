import _ from 'lodash';
import './style.css';

class Activities {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  static display() {
    const activity = [
      {
        description: 'wash Dishes',
        completed: false,
        index: 4,
      },
      {
        description: 'Prepare Supper',
        completed: false,
        index: 2,
      },
      {
        description: 'Sleep',
        completed: false,
        index: 3,
      },
      {
        description: 'wake up',
        completed: false,
        index: 1,
      },

    ];
    activity.sort((a, b) => a.index - b.index);

    const activityList = activity;
    activityList.forEach((item) => Activities.addActivity(item));
  }

  static addActivity(item) {
    const list = document.querySelector('.activities');

    const liItem = document.createElement('li');

    liItem.innerHTML = `
    <div class="insideList">
      <input type="checkbox" name="" id="">
      <h3>${item.description}</h3>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    `;

    list.appendChild(liItem);
  }
}

// display Events
document.addEventListener('DOMContentLoaded', Activities.display);
