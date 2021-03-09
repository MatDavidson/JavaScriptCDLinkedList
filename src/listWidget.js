import {CircularLinkedList} from './circularLinkedList.js';
import React from 'react';

class ListWidget extends React.Component {
  constructor(props) {
    super(props);
    var list = new CircularLinkedList();
    this.state = { list: list, value: 'Add something to the list' };

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let s = document.getElementById("item").value;
    this.state.list.add(s);

    this.render();

    event.preventDefault();
  }

  

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Item:
          <input type="text" id="item" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <Stats list={this.state.list} />
        </form>
      </div>
    )
  }
}

function head(list) {
    if(list.count === 0)
      return null;
    else
      return list.head.item;
}
function tail(list) {
  if(list.count === 0)
    return null;
  else
    return list.tail.item;
}

function Stats(props) {
  const element = (
    <div>
      <h3>Count: {props.list.count}</h3>
      <h3>Head: {head(props.list)}</h3>
      <h3>Tail: {tail(props.list)}</h3>
    </div>
  );
  return element;
}
    
export default ListWidget;    

// <h3>Count: {this.state.list.count}</h3>
//       <h3>Head: {head(this.state.list)}</h3>
//       <h3>Tail: {tail(this.state.list)}</h3>