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
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }
    reverse(){
        if(this.length===0)return undefined;
        if(this.length===1)return this;
        let aroo=this.head;
//IMPORTANT to activate the .next which is a part of the NODE, not the dblylinked constructor
// Allows you to 'save the data link'... using the this.head will not... b/c
// this.head within this current class is being manipulated and wont allow it be saved; this.head is fluid.
        let nextNode=this.head.next;
        let previous=null;
        this.head=this.tail;
        this.tail=aroo; 
//so we just set this.head to last item's node sequence
//this code works from the new this.head but uses the value of the original this.head to start the code change
// while it links the chains from index 0 to 1 to 2 to 3 until it reaches the new this.head
        for(let i=0; i<this.length; i++){
            console.log('separator.....................................')
            aroo.next=previous; //sets the .next to previous
 //connects the current node with the new node before it.(new node was previously after in original chain)
            aroo.prev=nextNode;
            previous=aroo; //saves the completed and changed node;
            aroo=aroo.prev;  //targets the prev node in the now completed chain.
// had to cap nextNode less it would attempt to access the 'next' of a null in 
// the last iteration and throw undefined;
            if(this.length!==i+1)nextNode=nextNode.next;
        }
        return this;
    }
    print(){
        let arr=[];
        let current=this.head;
        while(current){
            arr.push(current.value);
            current=current.next;
        }
        console.log(arr);
    }
}
const newList= new DoublyLinkedLists;
newList.push('Aro1o');
newList.push('aroo2');
newList.push('aroo3sdfdf');
newList.push('aroo4zz');
newList.reverse();
// console.log(newList);
newList.print();