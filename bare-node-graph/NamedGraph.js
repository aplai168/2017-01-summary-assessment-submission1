var Graph = require('./Graph.js');

class NamedGraph extends Graph {
  constructor(name, adjacencyListPath) {
    super();
    this.name = adjacencyListPath;
  }

}


module.exports = NamedGraph;
