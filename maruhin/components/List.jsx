import React from 'react';
import TaskForm from './TaskForm.jsx';
import Task from './Task.jsx'

export default class List extends React.Component {
    state = {
      tasks: [],
    };
    addTask = (taskName) => {
      let arr = this.state.tasks;
      arr.push(taskName);
      this.setState({tasks:arr});
    };
    eachTask = (task,i) => {
      return(
        <Task key={i}
          index={i}
        >{task}</Task>
      )
    };

    render() {
      return (
        <div className = "list">
          <div>
            <h1>{this.props.children}</h1>
            <TaskForm createTask = {this.addTask}/>
            {this.state.tasks.map(this.eachTask)}
          </div>
        </div>
      )
    }
}
