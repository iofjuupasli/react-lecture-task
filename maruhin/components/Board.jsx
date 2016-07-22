import React from 'react';

export default class Board extends React.Component {
    state = {
      added: false,
      lists:[]
    };
    addList = () => {
      //this.setState({added: true});
      //alert('adding list');
      this.setState({
            added: true
        });
    };
    renderAddedListContainer(){
      return (
        <div className = "board">
          <div>
            <h1>Add a new list of tasks...</h1>
            <input placeholder="create a new task"/>
            <button onClick={this.addList}
              className="add-list">Add list</button>
          </div>
          <hr/>
          <div className = "list">
            <p>Some list added</p>
          </div>
        </div>
      )
    };
    renderAddListContainer(){
      return (
        <div className = "board">
          <div>
            <h1>Add a new list of tasks...</h1>
            <input placeholder="create a new task"/>
            <button onClick={this.addList}
              className="add-list">Add list</button>
          </div>
        </div>
      )
    };
    render() {
        if (this.state.added) {
          return this.renderAddedListContainer();
        }
        else {
          return this.renderAddListContainer();
        }
    }
}
