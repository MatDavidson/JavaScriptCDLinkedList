import {CircularLinkedList} from './circularLinkedList.js';

// //Simple add test
// console.log("01: Testing add functionalioty.");
// var list = new CircularLinkedList();
// list.add('Hi');
// list.print();
// list.add(90);
// list.add(6.99);
// list.add('Pickle');
// list.add(45);
// list.add('Dog');
// list.print();
// list.reversePrint();

// //Simple Search test
// console.log("02: Testing find functionalioty.");
// let i = list.find('Pickle');
// console.log("Raw String - Expected: 3, Received: " + i);

// let n = new Node('Pickle'); 
// i = list.find(n);
// console.log("Node w/ String - Expected: 3, Received: " + i);

// i = list.find(45);
// console.log("Raw Number - Expected: 4, Received: " + i);

// n = new Node(6.99); 
// i = list.find(n);
// console.log("Node w/ Number - Expected: 2, Received: " + i);

// //Simple remove test
// console.log("03: Testing remove functionalioty.");
// list.print();
// console.log("Count before: " + list.count);
// i = list.remove('Pickle');
// console.log("Remove 'Pickle' - Expected: 3, Received: " + i);
// list.print();
// console.log("Count after: " + list.count);

// i = list.remove('Dog');
// console.log("Remove 'Dog' - Expected: 4, Received: " + i);
// list.print();
// console.log("Count after: " + list.count);

// i = list.remove('Hi');
// console.log("Remove Head - Expected: 0, Received: " + i);
// list.print();
// console.log("Count after: " + list.count);

// i = list.remove(90);
// console.log("Remove head again - Expected: 0, Received: " + i);
// list.print();
// console.log("Count after: " + list.count);

// console.log("04: Adding custom objects.");

class Thing{
    constructor(name, num){
        this.name = name;
        this.num = num;
    }
}

var list = new CircularLinkedList();
list.add(new Thing("Bill", 1));
list.add(new Thing('Tim', 10));
list.print();

var n = list.head;
console.log('Head: ' + n.item.name + ", " + n.item.num);
n = list.tail;
console.log('Tail: ' + n.item.name + ", " + n.item.num);
console.log('Remove Tim');

list.remove(n);
n = list.head;
console.log('Head: ' + n.item.name);