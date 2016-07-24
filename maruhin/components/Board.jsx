import React from 'react';
import List from './List.jsx';
import ListForm from './ListForm.jsx';

export default class Board extends React.Component {
    state = {
      lists:[]
    };
    addList = (listName) => {
      let arr = this.state.lists;
      arr.push(listName);
      this.setState({lists:arr});
    };
    removeList = (i) => {
      let arr = this.state.lists;
      arr.splice(i,1);
      this.setState({lists: arr});
    };
    eachList = (list,i) =>{
      return(
        <List key={i}
          index={i}
          onRemove = {this.removeList}
        >{list}</List>
      )
    };

    render() {
        return(
          <div className = "board">
            <ListForm createList = {this.addList}/>
            {this.state.lists.map(this.eachList)}
          </div>
        )
    }
}
