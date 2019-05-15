// only main rule is that the children must be less than the parent; nodes are filled in left to right.

// For Binary Heaps: using an array;
// For an index of an array 'N'..... the left child is stored at 2n+1; the right at 2n+2;
// to find a Parent node from a child use .floor((n-1)/2)
class MaxBinaryHeap{
    constructor(){
        this.values=[];
    }
    insert(value){
        this.values.push(value);
    }
}
let arooMan=new MaxBinaryHeap();
arooMan.insert(100);
console.log(arooMan);