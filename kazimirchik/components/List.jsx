import React from 'react'
import Item from './Item';

class List extends React.Component {
  state = {
    items: [],
    value: ""
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
      items: this.state.items
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      items: this.state.items.concat([this.state.value])
    });
  };

  onItemDelete = (elem) => {
    this.setState({
      items: this.state.items.filter((item) => {
        return item !== elem;
      })
    });
  };

  render(){
    const items = this.state.items.map((elem, index) => {
      return <Item value = {elem} key = {index} onItemDelete = {this.onItemDelete}/>
    });
    return (
      <div>
        <h2>{this.props.name}</h2>
        <form onSubmit = {this.onSubmit}>
          <input
            type = "text"
            value = {this.state.value}
            onChange={this.onChange}
          />
        <button>Post</button>
        </form>
        {items}
      </div>
    );
  };
}

export default List;
