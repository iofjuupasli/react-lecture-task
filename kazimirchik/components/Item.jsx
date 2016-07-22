import React from 'react'

class Item extends React.Component {

  render(){
    return (
      <div>{this.props.value}
        <button onClick = {() => {this.props.onItemDelete(this.props.value)}}>remove</button>
      </div>
    )
  };
}

export default Item;
