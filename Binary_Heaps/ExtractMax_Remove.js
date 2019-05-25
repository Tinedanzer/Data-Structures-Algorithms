// only main rule is that the children must be less than the parent; nodes are filled in left to right.
// For Binary Heaps: using an array;
// For parent of index 'N'..... the left child is stored at 2n+1; the right at 2n+2;
// to find a Parent node from a child use .floor((n-1)/2)
class MaxBinaryHeap{
    constructor(){
        this.values=[ 55, 45, 41, 37, 24 ];
    }
    removeMax(){
// setting root(100) to the last array value(now is 42 root); and then removing last value(42)
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
        let parent=this.values[indx];
        let left=2*indx+1;
        let right=2*indx+2;
// checking that the left or right index exists in order to continue while loop.
        while(left<this.values.length||right<this.values.length){
// HOWEVER***** left could exist while right doesnt and vice versa;;; so below I USE:
// right>=this.values.length ; if right doesnt 'exist' left side still runs; same for right;
// this allows us to fully traverse one side of the tree, even if one child is empty;**********
// checks if parent is greater than both children; if true; returns and exits;
            if(parent>this.values[left] && parent>this.values[right]) return;
            if(this.values[left]>this.values[right] || right>=this.values.length){
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
    }
}
let aroo=new MaxBinaryHeap;
console.log(aroo.removeMax());