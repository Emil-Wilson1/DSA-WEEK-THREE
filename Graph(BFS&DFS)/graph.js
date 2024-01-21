class Graph{
  constructor(){
    this.list={}
  }
  addVertex(vertex){
    if(!this.list[vertex]){
      this.list[vertex]=new Set()
    }
  }

  addEdge(vertex1,vertex2){
    if(!this.list[vertex1]){
      this.addVertex(vertex1)
    }
    if(!this.list[vertex2]){
      this.addVertex(vertex2)
    }
    this.list[vertex1].add(vertex2)
    this.list[vertex2].add(vertex1)
  }

  hasEdge(vertex1,vertex2){
    return(
      this.list[vertex1].has(vertex2) &&
      this.list[vertex2].has(vertex1)
    )
  }

  display(){
    for(let vertex in this.list){
      console.log(vertex + "->"+[...this.list[vertex]]);
    }
  }

 

  bfs(startVertex) {
    const visited = {};
    const queue = [];

    if (!this.list[startVertex]) {
      console.log("Vertex not found in the graph.");
      return;
    }

    queue.push(startVertex);
    visited[startVertex] = true;

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      for (const neighbor of this.list[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }

  dfs(startVertex) {
    const visited = {};

    const dfsHelper = (vertex) => {
      visited[vertex] = true;
      console.log(vertex);

      for (const neighbor of this.list[vertex]) {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      }
    };

    if (!this.list[startVertex]) {
      console.log("Vertex not found in the graph.");
      return;
    }

    dfsHelper(startVertex);
  }

  
}

const graph = new Graph();
  
  // add vertices
  graph.addVertex("1");
  graph.addVertex("2");
  graph.addVertex("3");
  graph.addVertex("4");
  
  // add edges
  graph.addEdge("1", "3");
  graph.addEdge("2", "3");
  graph.addEdge("3", "4");
  graph.addEdge("4", "1");
  
  // perform BFS
  console.log("BFS:");
  graph.bfs("1");
  
  // perform DFS
  console.log("DFS:");
  graph.dfs("1");

  graph.display()