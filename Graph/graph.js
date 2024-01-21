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

  removeEdge(vertex1,vertex2){
    this.list[vertex1].delete(vertex2)
    this.list[vertex2].delete(vertex1)
  }

  removeVertex(vertex){
    if(!this.list[vertex]){
      return
    }
    for(let adjVertex of this.list[vertex]){
      this.removeEdge(vertex,adjVertex)
    }
    delete this.list[vertex]
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
  


  console.log(graph.hasEdge("1","4"))

  graph.removeEdge("1","3")
  graph.removeVertex("1")

  graph.display()