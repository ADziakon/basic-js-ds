const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */


class Stack {
  constructor(){
    this.value = [];
  }

  push(element) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.value.push(element);
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
   
    // if(this.value.length == 0){
    //   return undefined;
    // }
    return this.value.pop();

  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.value[this.value.length-1];
  }
}

module.exports = {
  Stack
};
