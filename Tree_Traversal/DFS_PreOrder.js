// **************use breadth search when traversing down a tree similar to a singly linked list
//b/c memory stored in the queue will be less than a 'Depth Search', due to the space complex with recursion.

// Space complexity when the tree has many children etc etc, then it's better to use DEPTH FIRST
// due to when BREADTH gets further down a fully filled out binary heap tree, the space becomes high
// compared to recursion *******
// THEN if a tree is big and similar to a binary heap, use logic to figure  out which 
// DEPTH FIRST SEARCH should be done**********************

//Depth First Search. PRORDER: 
// STARTS with a visit to root.node;  then records its immediate left child  and so forth until null;
// then works back up and visits right children, recording parents first****** before children.

//******* */EXAMPLE: [10,5,0,7,6,8,13,20] from below; *freezes* the tree to be recreated later********
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
    preOrder(){
        let complete=[];
        let current=this.root;
//recursive; the node.lefts.lefts.lefts stack on each other to traverse as the functon keeps
//getting called. The base case happens when .left||.right calls null into the function.
        function helperFunc(node){
            complete.push(node.value);
            if(node.left)helperFunc(node.left);
            if(node.right)helperFunc(node.right);
        }
        helperFunc(current);
        return complete;
    }
}
let aroo= new BST();
aroo.insert(10);
aroo.insert(5);
aroo.insert(13);
aroo.insert(20);
aroo.insert(0);
aroo.insert(7);
aroo.insert(8);
aroo.insert(6);
console.log(aroo.preOrder());