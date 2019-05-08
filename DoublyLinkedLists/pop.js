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
        let aroo=this.tail.value;
        if(this.length===0)return undefined;
        if(this.length===1){this.head=null;this.tail=null;this.length--;return aroo}
        
        this.length--;
        return aroo;
    }
}
const newList= new DoublyLinkedLists;
newList.push('Aro1o');
// newList.push('aroo2');
// newList.push('aroo3sdfdf');
// newList.push('aroo4zz');
newList.pop();
console.log(newList);