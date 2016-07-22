import React from 'react';
import List from './List';

export default class Board extends React.Component {
    state = {
        lists: [],
        newListName: ''
    }

    addList = () => {
        this.setState({
            lists: this.state.lists.concat({listName: this.state.newListName}),
            newListName: ''
        });
    };

    onListChange = e => {
        this.setState({
          newListName: e.target.value
        })
    };

    preventDefault = e => {
        e.preventDefault();
    };

    render() {
        let lists = [];
        for (let i = 0; i < this.state.lists.length; i++) {
            lists.push(< List listInfo = { this.state.lists[i] } />);
        }
        return (
            <div>
                <form onSubmit={this.preventDefault} className='form'>
                    <input type='text' onChange={this.onListChange} value={this.state.newListName}/>
                    <button onClick={this.addList}>Add List</button>
                </form>
                { lists }
            </div>
        );
    }
}
