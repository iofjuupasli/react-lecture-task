const Card = (props) => (
  <div className="card" draggable={true} onDragStart={
    (event) => { console.log(event.target, props.listName) }
  }>
    <p contentEditable={true} onInput={
      (event) => {
        props.onEditCard(
          event.target.innerText,
          props.listName,
          props.text
        )
      }
    }>{ props.text }</p>
    <button onClick={
      () => {
        props.onRemoveCard(
          props.listName,
          props.text
        )
      }
    }>Remove</button>
  </div>
)

export default Card;
