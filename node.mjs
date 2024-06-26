class Node {
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
        // these set the default to null if no value is passed to the constructor
    }
}
export { Node };