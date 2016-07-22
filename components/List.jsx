import React from 'react';
import Card from './Card';

class List extends React.Component {
    state = {
        listName: this.props.listInfo.listName,
        cards : [],
        newTask: ''
    };

    addCard = () => {
        this.setState({
            cards: this.state.cards.concat({task: this.state.newTask}),
            newTask: ''
        });
    };

    onCardChange = e => {
        this.setState({
          newTask: e.target.value
        })
    };

    preventDefault = e => {
        e.preventDefault();
    };

    removeList = () => {
      this.props.removeList();
    }

    onRemoveCard = i => {
      this.setState({
          cards: this.state.cards.filter((item,index) => {
            return index != i;
          }),
      });
    }

    render() {
        let cards = [];
        for (let i = 0; i < this.state.cards.length; i++) {
            cards.push(< Card cardInfo = { this.state.cards[i] } removeCard = {() => this.onRemoveCard(i)} />);
        }
        return (
            <div className='list'>
                <form onSubmit={this.preventDefault}>
                    <div onClick={this.removeList} className='remove'>x</div>
                    <p>{this.props.listInfo.listName}</p>
                    <input type='text' onChange={this.onCardChange} value={this.state.newTask}/>
                    <button onClick={this.addCard}>Add Card</button>
                </form>
                { cards }
            </div>
        );
    }
}

export default List;
