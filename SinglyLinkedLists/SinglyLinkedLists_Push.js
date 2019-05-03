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
        if(this.head!==null){
            this.tail.next = newNode;
            this.tail= newNode ;}
        if(this.head===null){
            this.head=newNode;
            this.tail=this.head;}
        this.length ++
        console.log(this);
        return this;
    }
}
let newList = new SinglyLinkedList();
newList.push('Aro2o');
newList.push('aroo2');
newList.push('aroo3sdfdf');
newList.push('aroo5');
// console.log(newList.head.next.next.next);