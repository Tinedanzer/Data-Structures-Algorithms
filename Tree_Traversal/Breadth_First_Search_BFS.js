// **************use breadth search when traversing down a tree similar to a singly linked list
//b/c memory stored in the queue will be less than a 'Depth Search', due to the space complex with recursion.

// Space complexity when the tree has many children etc etc, then it's better to use DEPTH FIRST
// due to when BREADTH gets further down a fully filled out binary heap tree, the space becomes high
// compared to recursion *******
// THEN if a tree is big and similar to a binary heap, use logic to figure  out which 
// DEPTH FIRST SEARCH should be done**********************

// These Searches work on all 'binary trees', (not just binary search trees(ordered))
// and code can be manipulated to fit other types of trees.
// Breadth first search: stores all data on each horizontal stack, starting from the root,
// before moving on to the next horizontal stack underneath.

class Node{
    constructor(val){
        this.value=val;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(num){
        let newNode= new Node(num);
        if(this.root===null){this.root=newNode;return this;}
        let pewpew=this.root;
        while(1){
            if(num===pewpew.value)return undefined;
            if(num<pewpew.value){
                if(pewpew.left===null){
                    pewpew.left=newNode;
                    return this;
                }
                else pewpew=pewpew.left;
            }
            else{
                if(pewpew.right===null){
                    pewpew.right=newNode;
                    return this;
                }
                else pewpew=pewpew.right;
            }
        }
    }
// an empty array [] returns true in shitty javascript; '' string  returns false however; stupid fun.#madtimewasted
    breadthFirst(){
        let data=[];
        let queue=[];
        let node=this.root;
        queue.push(this.root);
        while(queue.length){
            node=queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}
let aroo= new BST();
aroo.insert(10);
aroo.insert(5);
aroo.insert(13);
aroo.insert(20);
aroo.insert(0);
aroo.insert(6);
console.log(aroo.breadthFirst());