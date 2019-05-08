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
        let newNode=new Node(val);if(!this.head){this.head=newNode;this.tail=newNode;}
        else{this.tail.next=newNode;newNode.prev=this.tail;this.tail=newNode;}this.length++;return this;}
    shift(){
        if(this.length===0)return undefined;let aroo=this.head;
        if(this.length===1){this.head=null;this.tail=null;this.length--; return aroo}
        this.head=aroo.next;aroo.next=null;this.head.prev=null;this.length--;return aroo;}
    pop(){let aroo=this.tail;if(this.length===0)return undefined;
            if(this.length===1){this.head=null;this.tail=null;this.length--;return aroo}
    this.tail=aroo.prev;this.tail.next=null;aroo.prev=null;this.length--;return aroo;}
    get(i){
        if(i<0||i>=this.length){console.log('this happened'); return null};
        let avg=this.length/2-1;
        if(i<=avg){let counter=0;let aroo=this.head;
            while(1){if(i===counter)return aroo;counter++;aroo=aroo.next;}}
        else{let counter=this.length-1;let aroo=this.tail;
            while(1){if(i===counter)return aroo;counter--;aroo=aroo.prev;}}}
    remove(i){
        let aroo=this.get(i);
        if(!aroo){console.log('arooooo'); return undefined}
        if (this.length===1){this.shift(); return aroo}
        if(this.length===i+1){this.pop(); return aroo}
        if(i===0){this.shift();return aroo}
            // console.log(aroo.prev.next);
        aroo.next.prev=aroo.prev;
        aroo.prev.next=aroo.next;
        aroo.prev=null, aroo.next=null;
        this.length--;
        return aroo;
    }
}
const newList= new DoublyLinkedLists;
newList.push('Aro1o');
newList.push('aroo2');
newList.push('aroo3sdfdf');
// newList.push('aroo4zz');
// newList.remove(2);
// newList.remove(1);
newList.remove(0);
console.log(newList);