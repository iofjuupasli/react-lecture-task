import React from 'react';
import NewListForm from './NewListForm';
import List from './List';

const Lists = (props) => (
  <div>
    <ul className="lists">
      { props.lists.map(list => (
        <li key={ list.name }>
          <List
            name={list.name}
            cards={list.cards}
            onAddCard={props.onAddCard}
            onRemoveCard={props.onRemoveCard}
            onRemoveList={props.onRemoveList}
            onEditCard={props.onEditCard}
            />
          </li>
        )
    )}
    </ul>
  </div>
)

export default class Board extends React.Component {

  state = {
    lists: []
  }

  onListCreate = (name) => {
    this.setState({
      lists: [...this.state.lists, {
        name,
        cards: []
      }]
    })
  }

  onAddCard = (listName, text) => {
    this.setState({
        lists: this.state.lists.map((list) => {
          if (list.name === listName) {
            return Object.assign({}, list, { cards: [...list.cards, text] })
          }
          return list;
        })
    })
  }

  onRemoveCard = (listName, text) => {
    this.setState({
        lists: this.state.lists.map((list) => {
          if (list.name === listName) {
            return Object.assign({}, list, { cards: list.cards.filter((card => {
              if (card === text) {
                return false;
              }
              return true;
            }))})
          }
          return list;
        })
    })
  }

  onRemoveList = (listName) => {
    this.setState({
      lists: this.state.lists.filter(list => {
        if (list.name === listName) return false;
        return true;
      })
    })
  }

  onEditCard = (newText, listName, text) => {
    this.setState({
        lists: this.state.lists.map((list) => {
          if (list.name === listName) {
            return Object.assign({}, list, { cards: list.cards.map((card => {
              if (card === text) {
                return newText;
              }
              return card;
            }))})
          }
          return list;
        })
    })
  }

  render() {
    return (
      <div>
        <span>Board</span>
        <NewListForm onListCreate={ this.onListCreate }/>
        <Lists
          lists={ this.state.lists }
          onAddCard={ this.onAddCard }
          onRemoveCard={ this.onRemoveCard }
          onRemoveList={this.onRemoveList}
          onEditCard={this.onEditCard}
        />
      </div>
    )
  }
}
