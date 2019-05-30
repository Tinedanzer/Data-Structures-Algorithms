//Priority Queues can be used generically, doesnt have to part of a Bineary Heap;
class Node{
    constructor(val,priority){
        this.val=val;
        this.priority=priority;
    }
}
class PriorityQueue{
    constructor(){
        this.values=[];
    }
    insert(val,priority){
        const newNode= new Node(val,priority);
        this.values.push(newNode);
        if(this.values.length===1)return this;
        this.bubble();
    }
    bubble(){
//finding last index with this.values.length-1; then applying formula to find parentIndex;.floor(n-1)/2
        let currentIndex=this.values.length -1;
        let parentIndex=Math.floor((currentIndex-1)/2)
        let x;
        this.values[parentIndex] ? x=this.values[parentIndex].priority : this
        let y=this.values[currentIndex].priority;
        while(y < x){
            // swap index of value with parent, then update parent; then good game.
            // do the same with temp  indexes as you did w/ the values;
            let temp=this.values[parentIndex];
            this.values[parentIndex]=this.values[currentIndex];
            this.values[currentIndex]=temp;
            currentIndex=parentIndex;
            // uses mathematics to recalculate new parent from child.
            parentIndex=Math.floor((currentIndex-1)/2);
// checking to see if parentIndex exists;  if it does, assign x the new x priority and continue
// if it doesnt, assign x to the currentindex and have currentIndex compared to currentIndex to
// stop the loop;  without this, code would eventually return undefined for a node due to a -1 index.
// due to currentIndex potentially going to -0.5 and floored to -1 index.
// could have swapped while loop to (currentindex>0) as well to be simple:P 
this.values[parentIndex] ? x=this.values[parentIndex].priority : x=this.values[currentIndex].priority;
        }
        return this;
    }
// *********** starting of ExtractMax/ExtractMin(take out root)/dequeue function; *******
    dequeue(){
// setting root priority(0) to the last array value(5 root); and then removing last value(0 former root)
        if(this.values.length===0)return null;
        if(this.values.length===1)return this.values.pop();
        const final= this.values[0];
        this.values[0]=this.values.pop();
        this.sinkDown();
        console.log(final);
        return this;
    }
// sinking new root down(swapping children) until it finds its rightful place.
    sinkDown(){
        let indx=0;
        let parent=this.values[0];
        let left=2*indx+1;
        let right=2*indx+2;
// checking that the left or right index exists in order to continue while loop.
        while(left<this.values.length||right<this.values.length){
        console.log(indx);
        console.log(this.values[indx]);
// HOWEVER***** left could exist while right doesnt and vice versa;;; so below I USE:
// right>=this.values.length ; if right doesnt 'exist' left side still runs; same for right;
// this allows us to fully traverse one side of the tree, even if one child is empty;**********
// checks if parent is greater than both children; if true; returns and exits;
            if(!this.values[right])return;
                if(parent.priority<=this.values[left].priority && parent.priority<=this.values[right].priority) return;
    try{    if(this.values[left].priority<this.values[right].priority || right>=this.values.length){
// if left node is greater than parent, we are finding them by index and swapping them;
// keeping 'parent' as the temporary variable as we traverse the tree.
// constantly updating and checking index,left, right to talk to the right head/children as we traverse.
                this.values[indx]=this.values[left];
                this.values[left]=parent;
                parent=this.values[left];
                // advances the index to go one row down the tree on the left.
                indx=left;
                left=2*indx+1;
                right=2*indx+2;
            }
            else{
                this.values[indx]=this.values[right];
                this.values[right]=parent;
                parent=this.values[right];
                indx=right;
                left=2*indx+1;
                right=2*indx+2;
            }
        }
            finally{
                this.values[indx]=this.values[left];
                        this.values[left]=parent;
                        parent=this.values[left];
                        indx=left;
                        left=2*indx+1;
                        right=2*indx+2;
            };
        }
    }
}
let arooMan=new PriorityQueue();
arooMan.insert(5,2);
arooMan.insert(95,0);
arooMan.insert(10,0);
arooMan.insert(13,3);
arooMan.insert(42,2);
arooMan.insert(50,1);
arooMan.insert(65,0);
arooMan.insert(100,0);
arooMan.insert(43,0);
arooMan.insert(26,0);
arooMan.insert(28,5);
arooMan.dequeue();
arooMan.dequeue();
arooMan.dequeue();

console.log(arooMan.values);