import React from 'react';
import Item from './item';

const Button = ({onClick, children}) => (
    <button onClick={onClick}>{children}</button>
);

export default class List extends React.Component {
    state = {
        newContent: '',
        items: []
    };

    onContentChange = e => {
        this.setState({newContent: e.target.value});
    };

    onAddItem = () => {
      this.setState({
          items: this.state.items.concat([this.state.newContent]),
          newContent: ''
      });
    };

    onDeleteList = () => {
      this.props.onDelete();
    };

    preventDefault = e => {
        e.preventDefault();
    }

    onItemDelete = i => {
      this.setState({
          items: this.state.items.filter((item, index) => index != i),
      });
    }

    render() {
        let content = [];
        for (let i = 0; i < this.state.items.length; i++) {
            content.push(< Item key = { this.state.items[i] } itemContent = { this.state.items[i] } onDelete = { () => this.onItemDelete(i) } />);
        }
        return (
            <div>
                <h4>{this.props.title}</h4>
                <div className="list">
                    { content }
                </div>
                  <form onSubmit={this.preventDefault}>
                      <input onChange={this.onContentChange} value={this.state.newContent}/>
                      <Button onClick={this.onAddItem}>add item</Button>
                  </form>
                  <Button onClick={this.onDeleteList}>del list</Button>
            </div>
        );
    }
}
