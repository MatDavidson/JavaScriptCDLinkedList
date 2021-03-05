import {CircularLinkedList} from './circularLinkedList.js';
'use strict';

const e = React.createElement;

class ListWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
      }
    
      render() {
        if (this.state.liked) {
          return 'You liked this.';
        }
    
        return e(
          'button',
          { onClick: () => this.setState({ liked: true }) },
          'Like'
        );
      }
    }
    
    const domContainer = document.getElementById('list');
    ReactDOM.render(e(ListWidget), domContainer);
    