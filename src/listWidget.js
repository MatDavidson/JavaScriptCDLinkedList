import {CircularLinkedList} from './circularLinkedList.js';
import React from 'react';

var list;
class ListWidget extends React.Component {
  constructor(props) {
    super(props);
    list = new CircularLinkedList();
    this.state = { lHead: list.head, lTail: list.tail, lCount: list.count, list: list, value: 'Add something to the list' };

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let s = document.getElementById('item').value;
    this.state.list.add(s);
    this.setState({lHead: list.head, lTail: list.tail, lCount: list.count});
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
          
          <Count count={this.state.lCount} />
          <Head head={this.state.lHead} />
          <Tail tail={this.state.lTail} />
        </form>
      </div>
    )
  }
}

function Count(props){
  return <h3>Count: {props.count}</h3>;
}
function Head(props){
  if(props.head)
    return <h3>Head: {props.head.item}</h3>
  else
    return <h3>Empty</h3>
}
function Tail(props){
  if(props.tail)
    return <h3>Tail: {props.tail.item}</h3>
  else
    return <h3>List</h3>
}

    
export default ListWidget;    

// <h3>Count: {this.state.list.count}</h3>
//       <h3>Head: {head(this.state.list)}</h3>
//       <h3>Tail: {tail(this.state.list)}</h3>