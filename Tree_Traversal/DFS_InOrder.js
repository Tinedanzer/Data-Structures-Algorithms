//Depth First Search. InORDER: Traverses down nodes on left side, then adds the value of the
// left most child on the left, then the right; then its parent; 
// THEN traverse down right side and add the children, then parent.
// LASTLY you visit the .root and add that value in;
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
    inOrder(){
        let complete=[];
//recursive; the node.lefts.lefts.lefts stack on each other to traverse as the functon keeps
//getting called. The base case happens when .left||.right calls null into the function.
// For PostOrder, we push the value at the very end of the recursiveness, not the start;
// this is how we get children.
        function helperFunc(node){
            if(node.left)helperFunc(node.left);
            if(node.right)helperFunc(node.right);
            complete.push(node.value);
        }
        helperFunc(this.root);
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
console.log(aroo.inOrder());