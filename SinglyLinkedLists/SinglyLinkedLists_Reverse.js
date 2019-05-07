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
        let current=this.head;
        let nextNode;  //benchmarked faster to keep variable outside for loop;
        // prev needs to start at null because beginning node needs to now point to prev;
        let prev= null;
        this.head=this.tail;
        this.tail=current;
        // this.tail.next=null;
        for(let i=0; i<this.length; i++){
// need this order of steps to insure proper links are upheld. 
// save next(for continuation)**main looping aspect, start the mutation: reassign the current.next to prev,
// now reassign the prev variable to the properly reassigned current node so it can be linked later
// and then continue through the list with the normal current=current.next type; however nextNode
// must be used otherwise the current.next returns NULL, due to reassignment; 
// List connection would be severed, so nextNode is essential and main.
            nextNode= current.next; // saves the .next of current node, NEED access later to continue loop
            current.next=prev; // reassigned the .next of current node ^^ after saving it.
            prev=current;  // saves current node(refer to later) to change prev to the 'next' node.
            current=nextNode;
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
let newList = new SinglyLinkedList();
newList.push('Aro1o');
newList.push('aroo2');
newList.push('aroo3sdfdf');
newList.push('aroo4zz');
newList.reverse();
// newList.reverse();
newList.print();