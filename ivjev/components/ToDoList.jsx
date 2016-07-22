import React from 'react';
import Task from './Task';

export default class ToDoList extends React.Component {
  propTypes = {
    listName: React.PropTypes.string.isRequired,
  }
  state = {
    tasks: [],
    taskInput: '',
  }
  addNewTask = (event) => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat([this.state.taskInput]),
      taskInput: '',
    });
  }
  editTaskInput = (event) => {
    this.setState({
      tasks: this.state.tasks,
      taskInput: event.target.value,
    });
  }
  removeTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task !== id),
      taskInput: this.state.taskInput,
    });
  }
  render() {
    const tasksArr = this.state.tasks.map((u, i) => (<Task
      txt={u}
      removeTask={this.removeTask}
      key={i}
    />));
    return (
      <div>
        {this.props.listName}
        <form onSubmit={this.addNewTask}>
          <input
            onChange={this.editTaskInput}
            type="text" value={this.state.taskInput}
          />
        </form>
        {tasksArr}
      </div>
    );
  }
}
