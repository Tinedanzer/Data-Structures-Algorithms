// "GET" takes an index(number) and returns the item in that position.
// "SET" takes a value and an index; finds the index and replaces the value.
class Node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;}
        if(this.head!==null){
            this.tail.next = newNode;
            this.tail= newNode ;}
        this.length ++
        // console.log(this);
        return this;
    }
// "GET" takes an index(number) and returns the item in that position.
// assigning current to progress to the .next value after each 'for' loop completion
    get(i){
        if(i<0 || i>=this.length)return undefined;
        let current=this.head
        for (let x=0;x<this.length;x++){
            if(i===x) {
                // console.log(current);
                return current;}
            current=current.next;            
        }
    }
// "SET" takes a value and an index; finds the index and replaces the value. Will use the 'GET' method.
    set(value,i){
        let foundNode=this.get(i);
        if(foundNode){
            foundNode.value= value;
            return true;
        }
        return false;
    }
}
let newList = new SinglyLinkedList();
newList.push('Aro1o');
newList.push('aroo2');
newList.push('aroo5zz');
newList.push('aroo6q');
newList.push('aroo3sdfdf');
newList.get(4);
newList.set(433,1);
console.log(newList);