// Depth First Search of a Graph, using recursion
// At the bottom is the function without my notes.
class Graph{
    constructor(){
        this.adjacencyList= {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex]=[];
    }
    addEdge(vertex,connect){
        this.adjacencyList[vertex].push(connect);
        this.adjacencyList[connect].push(vertex);
    }
    removeEdge(vertex,connect){
        this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(v=> v!==connect)
        this.adjacencyList[connect] = this.adjacencyList[connect].filter(v=> v!==vertex)
    }
// 'start' here is the starting point from which the graph is being DFS traversed.
    depthFirstSearchRecursively(start){
        let visited={}; 
        let results=[];
       console.log(this.adjacencyList);        
    //    Start of Helper Recursion function
//using an arrow func here otherwise 'this' will refer to the parent function above and NOT the class.
         const recursion=(vertex)=>{
            if(!vertex)return null;
// sets a marker that we have visited this vertex
            visited[vertex]=true;
// results is used for the final return, the order in which this graph has been traversed.
            results.push(vertex);
// a for loop over each iteration of the array within this key:value object 'adjecencyList[vertex]'.
// checks if the vertex in the visited object is TRUE(has occured); if not, recursion occurs with the 
// new 'vertex' or 'neighbor' that has not yet been run.
//'neighbor' belows represents each value of the array as we iterate. ex: 'A' then 'B' would occur next.
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return  recursion(neighbor);
                }
            });
        };
        recursion(start);
        return results;
    }
}
let aroo= new Graph();
// setting up a hexagon-type graph with a line through the middle of it, connecting D and E.
aroo.addVertex('A') //A
aroo.addVertex('B') //B
aroo.addVertex('C')  //C
aroo.addVertex('D')  // D
aroo.addVertex('E') // E
aroo.addVertex('F')        // F
aroo.addEdge('A','B')
aroo.addEdge('A','C')
aroo.addEdge('B','D')
aroo.addEdge('C','E')
aroo.addEdge('D','E')
aroo.addEdge('D','F')
aroo.addEdge('E','F')
// aroo.removeEdge('A','B')
console.log(aroo.depthFirstSearchRecursively('A'));
// console.log(aroo);

// version without notes
function depthFirstSearchRecursively(start){
    let visited={}; 
    let results=[];
   console.log(this.adjacencyList);
     const recursion=(vertex)=>{
        if(!vertex)return null;
        visited[vertex]=true;
        results.push(vertex);
        this.adjacencyList[vertex].forEach(neighbor => {
            if(!visited[neighbor])  return  recursion(neighbor);
        });
    };
    recursion(start);
    return results;
}