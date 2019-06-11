// Depth First Search of a Graph, using recursion
class Graph{
    constructor(){
        this.adjacencyList= {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex])
        this.adjacencyList[vertex]=[]
    }
    addEdge(vertex,connect){
        this.adjacencyList[vertex].push(connect);
        this.adjacencyList[connect].push(vertex);
    }
    removeEdge(vertex,connect){
        this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(v=> v!==connect)
        this.adjacencyList[connect] = this.adjacencyList[connect].filter(v=> v!==vertex)

    }
    depthFirstSearchRecursively(){

    }
}
function depthFirstSearchRecursively(){

}
let aroo= new Graph();
aroo.addVertex('pikaboo')
aroo.addVertex('shire')
aroo.addVertex('arookaboo')
aroo.addVertex('Carebearland')
aroo.addEdge('pikaboo','Carebearland')
aroo.addEdge('shire','Carebearland')
aroo.addEdge('arookaboo','Carebearland')
aroo.addEdge('pikaboo','shire')
aroo.addEdge('pikaboo','arookaboo')
// aroo.removeEdge('pikaboo','arookaboo')
// console.log(depthFirstSearchRecursively(aroo.adjacencyList));
console.log(aroo);