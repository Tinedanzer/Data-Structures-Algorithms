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
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        newNode.next= this.head;
        this.head= newNode;
        this.length++;
        return this;
    }
}
let newList = new SinglyLinkedList();
newList.push('Aro1o');
newList.push('aroo2');
newList.push('aroo5zz');
newList.push('aroo6q');
newList.unshift('pewpew');
newList.push('aroo3sdfdf');
console.log(newList);