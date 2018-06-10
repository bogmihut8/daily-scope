import React from 'react';
import Task from './Task'

class TasksContainer extends React.Component {
  render() {
    return (
         <div className="field">
          <div className="control">
            <input className="input" type="text" placeholder="Add new task" />
            <a className="button is-info is-inverted is-outlined">
                <span className="icon" style={{ marginRight:0 }}>
                  <i className="fas fa-plus"></i>
                </span>
                Add
            </a>
          </div>
          <div className="control">
            <Task title="test" />
          </div>
        </div>
    );
  }
}

export default TasksContainer;