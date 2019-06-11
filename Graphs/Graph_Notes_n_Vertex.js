// Graph Notes and Vertex Work
// edge is the connection between two vertices(one-way or two-way)
// Undirected Graph : vertexes are linked to one another(both-way connection) (facebook)
// Directed Graph : vertexes now have a one-way direction, that give the link (twitter)

// Weighted Graph: : vertexes now have weight in a certain/or either direction to the next vertex
// think 3d space, linear algebra and difficulty of terrain from one direction to another
// or back the other way downhill.

// Storing Graphs:::::::::::
// Adjacency Matrix =  1 meaning one connection, 0 means no connection; undirected graph example:
//   A  B  C  etc
// A 0  1  1
// B 1  0  1
// C 1  1  0
// adds an entire row and  an entire column for each vertex added.

// Adjacency List =  contains a list of each vertex's connections; undirected graph example:
// 5<>0<>1<>2<>3<>4<>5<>0<>1  (imagine a circle of connections like this)
//    {
// 0    [1,5],
// 1    [0,2],
// 2    [1,3],
// 3    [2,4],
// 4    [3,5],
// 5    [4,0]
//    }
// If not dealing with numbers; could use a Hash table {dictionairy, object, map, etc} :
/*
    {
    A: ["B","E"],
    B: ["A","C"],
    C: ["B","D"],
    D: ["C","E"],
    E: ["D","A"]
    }
*/