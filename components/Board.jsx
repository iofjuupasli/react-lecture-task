import React from 'react';
import NewListForm from './NewListForm';
import List from './List';
import Lists from './Lists';

function insertCard(lists, listName, cardName) {
  return lists.map((l)=> {
    if (l.name === listName) {
      return { ...l, cards: l.cards.concat(cardName)};
    }
    return l;
  });
}

function deleteCard(lists, listName, cardName) {
  return lists.map((l)=> {
    if (l.name === listName) {
      return { ...l, cards: l.cards.filter((c) => c === cardName ? false : true) };
    }
    return l;
  });
}

export default class Board extends React.Component {
  state = {
    lists: [],
    pageNum: 0,
    offset: 4,
    maxPages: 0,
  }

  onNewList = listName => {
    this.setState({
      lists: this.state.lists.concat({name: listName, cards: []}),
      maxPages: this.maxCountPages()
    })
  }

  onDeleteList = listName => {
    this.setState({
      lists: this.state.lists.filter((l) => {
        if (l.name === listName) {
          return false;
        }
        return true;
      })
    })
  }

  onNewCard = (listName, cardName) => {
    this.setState({
      lists: insertCard(this.state.lists, listName, cardName)
    })
  }

  onDeleteCard = (listName, cardName) => {
    this.setState({
      lists: deleteCard(this.state.lists, listName, cardName)
    })
  }

  maxCountPages = () => {
    return Math.floor(this.state.lists.length / 4);
  }

  onPrevPageClick = () => {
    this.setState({
      pageNum: this.state.pageNum <= 0 ? 0 : this.state.pageNum - 1,
    })
  }

  onNextPageClick = () => {
    this.setState({
      pageNum: this.state.maxPages >= this.state.pageNum ? this.state.pageNum + 1 : this.state.pageNum,
    })
  }
  render() {
    return (
      <div>
        <NewListForm onNewList={this.onNewList}></NewListForm>
        <Lists lists={this.state.lists} pageNum={this.state.pageNum} offset={this.state.offset}
          onNewCard={this.onNewCard} onDeleteList={this.onDeleteList} onDeleteCard={this.onDeleteCard}
           maxPages={this.state.maxPages} onNextPageClick={this.onNextPageClick}
           onPrevPageClick={this.onPrevPageClick}></Lists>
      </div>
    );
  }
}
