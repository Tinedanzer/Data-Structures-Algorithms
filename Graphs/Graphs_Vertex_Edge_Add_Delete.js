// undirected graph(meaning edges go both ways)

class Graph{
    constructor(){
        this.adjacenyList= {}
    }
    // establishes the vertex before connecting edges; creating new key with a value of empty array
    addVertex(vertex){
        if(!this.adjacenyList[vertex])
        this.adjacenyList[vertex]=[]
    }
    // creating an undirected graph; meaning edges must go both ways from both vertices.
    addEdge(vertex,connect){
        this.adjacenyList[vertex].push(connect);
        this.adjacenyList[connect].push(vertex);
    }
    removeEdge(vertex,connect){
        let x= this.adjacenyList[vertex].indexOf(connect);
        let y=this.adjacenyList[connect].indexOf(vertex);
        // using two different methods for same results; both work:
        this.adjacenyList[vertex].splice(x,1);
        // this.adjacenyList[connect].splice(y,1);
        this.adjacenyList[connect] = this.adjacenyList[connect].filter(v=> v!==vertex)
    }
    removeVertex(vertex){
        for(let x of this.adjacenyList[vertex]){
            console.log(x);
            this.removeEdge(vertex,x)
        }
        // this.adjacenyList[vertex].delete
    }
}
let aroo= new Graph();
aroo.addVertex('pikaboo')
aroo.addVertex('shire')
aroo.addVertex('arookaboo')
aroo.addVertex('Carebearland')
aroo.addEdge('shire','Carebearland')
aroo.addEdge('pikaboo','Carebearland')
aroo.addEdge('shire','arookaboo')
aroo.addEdge('pikaboo','shire')
aroo.addEdge('pikaboo','arookaboo')
aroo.removeEdge('pikaboo','arookaboo')
aroo.removeVertex('pikaboo');
console.log(aroo);