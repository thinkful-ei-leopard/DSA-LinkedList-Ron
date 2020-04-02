const LinkedList = require('./linked-list');

function main() {
  let SLL = new LinkedList(); // instantiating
  
  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Ronman', 'Boomer');
}

const result = main();
console.log(result);