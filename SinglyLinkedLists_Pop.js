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
// bam, first try; just rearranged data nodes, and deleted one; good game
    pop(){
        if(!this.head) return undefined;
        let current=this.head;
        while(current){
            if(this.length===1){
                let byebye= this.head;
                this.head=null;
                this.tail=null;
                this.length--;
                console.log(byebye);
                return byebye;
            }
            if(current.next.next===null){
                let byebye=current.next;
                current.next=null;
                this.tail=current;
                this.length--;
                console.log(byebye);
                return byebye;
            }
            current=current.next;
        }
    }
}
let newList = new SinglyLinkedList();
newList.push('Aro2o');
newList.push('aroo2');
newList.push('aroo3sdfdf');
// newList.push('aroo5');
newList.pop();
newList.pop();
console.log(newList);
// console.log(newList.head.next.next.next);