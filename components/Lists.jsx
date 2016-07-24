import React from 'react';
import List from './List';
import Button from './Button';

export default class Lists extends React.Component  {
  onPrevPageClick = () => {
    this.props.onPrevPageClick();
  }

  onNextPageClick = () => {
    this.props.onNextPageClick();
  }

  render() {
    const listsStyle = {
      display: 'table'
    };
    const paginationItemStyle = {
      display: 'inline-block',
      margin: '10%'
    };
    const paginationStyle = {
      border: '1px dashed gray',
      width: '8%',
      padding: '0 1%',
      marginTop: '1%'
    };
    const pageNum = this.props.pageNum;
    const offset = this.props.offset;

    return (
      <div>
        <div style={paginationStyle}>
          <Button style={paginationItemStyle} onClick={this.onPrevPageClick}>Prev</Button>
          <h4 style={paginationItemStyle}>{pageNum + 1}...{this.props.maxPages + 1}</h4>
          <Button style={paginationItemStyle} onClick={this.onNextPageClick}>Next</Button>
        </div>
      <div style={listsStyle}>
        {this.props.lists.map((l, i) => {
          if ((i >= pageNum * offset) && (i < (pageNum + 1) * offset)) {
           return (<List key={l.name} name={l.name} onNewCard={this.props.onNewCard}
            onDeleteList={this.props.onDeleteList} cards={l.cards}/>)
          }
          })}
      </div>
      </div>
    );
  }
}
