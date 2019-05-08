class Node{
    constructor(val){
        this.value=val;
        this.next=null;
        this.prev=null;
    }
}
class DoublyLinkedLists{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        let newNode=new Node(val);
        if(!this.head){this.head=newNode;this.tail=newNode;}
        else{this.tail.next=newNode;newNode.prev=this.tail;this.tail=newNode;}
        this.length++;
        return this;}
    unshift(val){
        let newNode=new Node(val);
        if(this.length===0){this.length++;this.head=newNode;this.tail=newNode;return this}
        // let aroo=this.head;
        this.head.prev=newNode;
        newNode.next=this.head;
        this.head=newNode;
        // this.head.next=aroo;
        this.length++;
        return this;
    }
}
const newList= new DoublyLinkedLists;
newList.push('Aro1o');
newList.push('aroo2');
// newList.push('aroo3sdfdf');
// newList.push('aroo4zz');
newList.unshift('mr.hanky');
console.log(newList );