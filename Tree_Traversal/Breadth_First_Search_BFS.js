let arooArr=[];
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
        this.queued = [];
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
    breadthFirst(){
        if(this.root===null)return undefined;
        
        console.log(this.queued);
        if(this.queued.length===0)this.queued=[this.root];
        let finished=[];
        this.leftStarter=this.root.left;
        this.rightStarter=this.root.right;
        finished.push(this.queued[0].value);
        this.queued.shift();
        
        // checking left and right;
        if(this.leftStarter!=null){
            console.log('this happened');
            this.queued.push(this.leftStarter);
            this.leftStarter=this.leftStarter.left;
        }
        if(this.rightStarter!=null){
            this.queued.push(this.rightStarter);
            this.rightStarter=this.rightStarter.right;
        };
        // console.log(this.queued);
        console.log(finished);
        // console.log(this.queued);
        if(this.queued.length===0)return finished;
        
        return this.breadthFirst();
    }
}
let aroo= new BST();
aroo.insert(10);
aroo.insert(5);
aroo.insert(13);
// aroo.insert(20);
// aroo.insert(0);
// aroo.insert(-5);
console.log(aroo.breadthFirst());