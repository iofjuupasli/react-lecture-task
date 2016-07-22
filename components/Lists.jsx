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

export default Lists;
