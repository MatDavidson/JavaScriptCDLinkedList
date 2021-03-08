import {CircularLinkedList} from './circularLinkedList.js';
import React from 'react';

class ListWidget extends React.Component {
  constructor(props) {
    super(props);
    var list = new CircularLinkedList();
    this.state = { list: list };
  }

  render() {
    return(
      <div>
        <div>
          
        <input type="text" id="text" value="Add something to the list"/>
        <button >Add</button>
        </div>
      <h3>Count: {this.state.list.count}</h3>
      <h3>Head: {head(this.state.list)}</h3>
      <h3>Tail: {tail(this.state.list)}</h3>

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

    
export default ListWidget;    