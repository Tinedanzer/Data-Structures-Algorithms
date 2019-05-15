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
        if(this.values.length===1)return this;
        this.bubble(value);
    }
    bubble(value){
        let parent=this.values[Math.floor((this.values.indexOf(value)-1)/2)]
        console.log(parent);
        while(value>parent){
            // swap index of value with parent, then update parent; then good game.
            return //remove return
        }
        return this;
    }
}
let arooMan=new MaxBinaryHeap();
arooMan.insert(5);
arooMan.insert(95);
arooMan.insert(10);
arooMan.insert(13);
arooMan.insert(42);
arooMan.insert(65);
arooMan.insert(50);
arooMan.insert(100);
console.log(arooMan);