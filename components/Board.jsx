import React from 'react';
import List from './list';

const Button = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
);

export default class Board extends React.Component {
    state = {
        newListName: '',
        lists: []
    };

    onTitleChange = e => {
        this.setState({newListName: e.target.value});
    };

    onAddList = () => {
      this.setState({
          lists: this.state.lists.concat([this.state.newListName]),
          newListName: ''
      });
    };

    preventDefault = e => {
        e.preventDefault();
    }

    onListDelete = i => {
      this.setState({
          lists: this.state.lists.filter((item, index) => index != i),
      });
    }

    render() {
        let content = [];
        for (let i = 0; i < this.state.lists.length; i++) {
            content.push(< List key = { this.state.lists[i] } title = { this.state.lists[i] } onDelete = { () => this.onListDelete(i) } />);
        }
        return (
            <div>
                <form onSubmit={this.preventDefault}>
                    <input onChange={this.onTitleChange} value={this.state.newListName}/>
                    <Button onClick={this.onAddList}>add list</Button>
                </form>
                <div className="board">
                    {content}
                </div>
            </div>
        );
    }
}
