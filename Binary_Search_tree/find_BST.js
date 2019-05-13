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
            }}}
    find(num){
        if(this.root===null)return false;
        let pewpew=this.root;
        while(1){
            if(num===pewpew.value)return pewpew;
            if(num<pewpew.value){
                if(pewpew.left===null){
                    return false;
                }
                else pewpew=pewpew.left;
            }
            else{
                if(pewpew.right===null){
                    return false;
                }
                else pewpew=pewpew.right;
            }
        }
    }
}
let aroo= new BST();
aroo.insert(10);
aroo.insert(5);
aroo.insert(6);
aroo.insert(13);
aroo.insert(20);
aroo.insert(0);
aroo.insert(-5);
console.log(aroo.find(6));