import { Node } from './node.mjs';

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    append(value) {
        // should add a value to the end
       let node = new Node(value);
       if (this.head === null) {
        this.head = node;
        this.tail = node;
       } else {
        this.tail.next = node;
        this.tail = node;
       }
       this.size++;
    }
    prepend(value) {
        // adds node to the start
        let node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    size() {
        return this.size;
    }
    head() {
        return this.head;
    }
    tail() {
        return this.tail;
    }
    at(index) {
        let i = 0;
        let curr = this.head;
        while (i !== index) {
            curr = curr.next;
            i++;
        }
        // reached the index
        return curr;
    }
    pop() {
        // remove tail and update pointers
        // first case: size is 1
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
            size--;
        } else {
            let curr = this.head;
            // iterate until we head the node which has this.tail as its next
            while (curr.next !== this.tail) {
                curr = curr.next;
            }
            this.tail = curr // second last node before deleting
            this.tail.next = null;
            size--;
        }
    }
    contains(val) {
        if (this.head === null) {
            return false;
        } else {
            curr = this.head;
            while (curr.next !== null) {
                if (curr.value === val) {
                    return true
                }
                curr = curr.next;
            }
            return false;
        }
    }
    find(val) {
        if (this.head === null) {
            return null;
        } else {
            let index = 0;
            curr = this.head;
            while (curr.next !== null) {
                if (curr.value === val) {
                    return index;
                }
                curr = curr.next;
                index++;
            }
            return null;
        }
    }
    toString() {
        let res = "";
        let curr = this.head;
        while (curr !== null) {
          res += `( ${curr.value} ) -> `;
          curr = curr.next;
        }
        return res + "( null )";
    }
}