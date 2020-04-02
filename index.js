const LinkedList = require('./linked-list');

function main() {
  let ll = new LinkedList(); // instantiating
  
  ll.insertFirst(5);
  ll.insertFirst(3);
  ll.insertFirst(20);
}

const result = main();
console.log(result);