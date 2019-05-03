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
    shift(){
        if(this.length===0) return null;
        let byeHead= this.head;
        this.length--;
        if(this.length===0) {
            this.head=null;
            this.tail=null;
            return byeHead;
        }
        this.head=byeHead.next;
        return byeHead;
    }
}
let newList = new SinglyLinkedList();
newList.push('Aro1o');
newList.shift();
newList.push('aroo2');
newList.push('aroo3sdfdf');
newList.shift();
newList.shift();
newList.push('aroo5');
newList.push('aroo6');
console.log(newList);