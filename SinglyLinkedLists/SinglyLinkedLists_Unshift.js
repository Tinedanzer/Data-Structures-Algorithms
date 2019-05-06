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
        this.length ++
        return this;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
// filling in the value of newNode.next before assign it to this.head****
// also checking to see if the array is longer than 1; otherwise we dont want to set
// a circular loop for the .next object. (next would refer to itself if it's the first unshifted)
        if(this.length>0){
            newNode.next= this.head;
            this.head= newNode;
        }
        this.length++;
        return this;
    }
}
let newList = new SinglyLinkedList();
newList.push('Aro1o');
// newList.push('aroo2');
// newList.push('aroo5zz');
// newList.push('aroo6q');
newList.unshift('pewpew');
// newList.push('aroo3sdfdf');
console.log(newList);