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
    pop(){
        if(!this.head) return 'empty array';
        let current=this.head;
        while(current){
            if(this.length===1){
                let byebye= this.head;
                this.head=null;
                this.tail=null;
                this.length--;
                return byebye;
            }
            if(current.next.next===null){
                let byebye=current.next;
                current.next=null;
                this.tail=current;
                this.length--;
                return byebye;
            }
            current=current.next;
        }
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        if(this.length>0){
            newNode.next= this.head;
            this.head= newNode;
        }
        this.length++;
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
    get(i){
        if(i<0 || i>=this.length)return undefined;
        let current=this.head
        for (let x=0;x<this.length;x++){
            if(i===x) {
                return current;}
            current=current.next;
            
        }
    }
    insert(value,i){
        if(i<0 || i+1>this.length)return false;
        if(i+1===this.length) return !!this.push(value);
        if(i===0)return !! this.unshift(value)
// first reassign the .next chain that is last in the line, THEN, remap the earlier node in order 
// to be more efficent for space and to insure connectivity without breaking the line.
        let newNode = new Node(value);
        newNode.next=this.get(i);
        this.get(i-1).next=newNode;
        this.length++
        return true;
    }
    remove(i){
        if(i<0 || i+1>this.length)return false;
        let aroo=this.get(i).value;
        // or return !!this.pop() ;; if the value exists the double bang will return true
        if(i+1===this.length) {this.pop(); return aroo;}
        if(i===0) {this.shift();return aroo;}

        this.get(i-1).next=this.get(i+1);
        this.length--;
        return aroo;
    }
}
let newList = new SinglyLinkedList();
newList.push('Aro1o');
newList.push('aroo2');
newList.push('aroo3sdfdf');
newList.push('aroo4zz');
// console.log(newList.insert('peekaboo',2));
console.log(newList.remove(2));
console.log(newList);