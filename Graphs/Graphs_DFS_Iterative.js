// undirected graph(meaning edges go both ways)
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
    removeVertex(vertex){
        for(let x of this.adjacencyList[vertex]){
            this.removeEdge(vertex, x)
        }
        delete this.adjacencyList[vertex]
    }
}
// setting up a hexagon-type graph with a line through the middle of it, connecting D and E.
aroo.addVertex('A') //A
aroo.addVertex('B') //B
aroo.addVertex('C')  //C
aroo.addVertex('D')  // D
aroo.addVertex('E') // E
aroo.addVertex('F') // F
aroo.addEdge('A','B')
aroo.addEdge('A','C')
aroo.addEdge('B','D')
aroo.addEdge('C','E')
aroo.addEdge('D','E')
aroo.addEdge('D','F')
aroo.addEdge('E','F')
// aroo.removeEdge('A','B')