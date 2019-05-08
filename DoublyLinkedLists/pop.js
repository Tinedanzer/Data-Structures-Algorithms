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
    pop(){
        let aroo=this.tail;
        if(this.length===0)return undefined;
        if(this.length===1){this.head=null;this.tail=null;this.length--;return aroo}
// reassign new tail to the previous of the last tail, then reassigning  the new tail's next to null
        this.tail=aroo.prev;
        this.tail.next=null;
// severing the link from both sides; the Node returned will have no 'prev' or 'next links.
        aroo.prev=null;
        this.length--;
        console.log(aroo);
        return aroo;
    }
}
const newList= new DoublyLinkedLists;
newList.push('Aro1o');
newList.push('aroo2');
newList.push('aroo3sdfdf');
// newList.push('aroo4zz');
newList.pop();
newList.pop();
console.log(newList);