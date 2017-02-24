var Graph = require('./Graph.js');

class NamedGraph extends Graph {
  constructor(adjacencyListPath, name) {
    super();
    this.adjacencyListPath = adjacencyListPath;
    this.name = name;
  }

}


module.exports = NamedGraph;
