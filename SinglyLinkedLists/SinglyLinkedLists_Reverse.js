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
            this.tail=newNode;}
        this.length ++;
        return this;
    }
    reverse(){
        if(this.length===0)return undefined;
        if(this.length===1)return this;
        let holder1=this.head;
        let holder2=this.head.next;
        this.head=this.tail;
        this.tail=holder1;
        this.tail.next=null;
        let holder3;
        for(let i=0; i<this.length; i++){
            holder1=holder2;
            holder2=holder2.next;
        }
        this.head=holder3;
        return this;
    }
}
let newList = new SinglyLinkedList();
newList.push('Aro1o');
newList.push('aroo2');
newList.push('aroo3sdfdf');
newList.push('aroo4zz');
console.log(newList.reverse());