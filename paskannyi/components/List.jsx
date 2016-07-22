import React from 'react';
import Task from './Task';

export default class List extends React.Component {

  state = {
   nameTask: '',
   tasks: []
  }

  onTaskChange = (e) => {
    this.setState ({
      nameTask: e.target.value
    });
  }

  onTaskCreate = () => {
    this.setState ({
      tasks: [...this.state.tasks, this.state.nameTask],
      nameTask: ''
    });
  }

    render() {
        return (
            <div className="single-list">
              <h3>{this.props.name}</h3>
              <input type="text" value={this.state.nameTask} onChange={this.onTaskChange}/>
              <button onClick={this.onTaskCreate}>Add task</button>
              {this.state.tasks.map(task => (<div key={task}>{task}</div>)) }
            </div>
        );
    }
}
