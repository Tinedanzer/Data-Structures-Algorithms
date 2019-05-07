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
    push(){
        let newNode=new Node;
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{

        }
        this.length++;
        return this;
    }
}
const newList= new DoublyLinkedLists;
console.log(newList);