//Depth First Search: Visits all nodes on left side, and left side nodes' left side, before
// going back up and traversing all right sides starting at the youngest child.
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
    depthFirstSearch(){
        let complete=[];
        let current=this.root;
//recursiove; the node.lefts.lefts.lefts stack on each other to traverse as the functon keeps getting called.
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
console.log(aroo.depthFirstSearch());