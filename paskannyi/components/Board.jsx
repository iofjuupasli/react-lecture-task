import React from 'react';
import ListForm from './ListForm';
import Lists from './Lists';


export default class Board extends React.Component {

  state = {
    lists: []
  }

   addList = (item) => {
    this.setState({
      lists: [...this.state.lists, item]
    });
   }

    render() {
        return (
            <div>
              <h1>Board!</h1>
              <ListForm  addList={this.addList}/>
              <Lists lists={this.state.lists}/>
            </div>
        );
    }
}
