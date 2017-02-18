// You'll need the `fs` module to read the adjacency list.
var fs = require('fs');

// HINT: fs.readFileSync is a great way to get the contents of a file.
// Using the synchronous version of the `readFile` method is appropriate here,
// because it is not a performance bottleneck.
// It will also make your code much easier to read and write.

// HINT: Each line in the adjacency list is separated by newline character (`\n`).

var Graph = function (adjacencyListPath) {
  // Structure the graph in JavaScript in a way that will be of service to you
  this.nodes;
  this.adjacencyListPath = adjacencyListPath;

  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = "linear";

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = "linear";

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = "linear";

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
  // first answers
  // let contents = fs.readFileSync('test/adjacency_lists/basic.txt', 'utf8');
  // let lines = contents.split('\n');
  // return lines.length;
  // new answers ==========================================
  // var files = [
  //   'test/adjacency_lists/basic.txt',
  //   'test/adjacency_lists/doubleDigits.txt',
  //   'test/adjacency_lists/nonConsecutive.txt',
  //   'test/adjacency_lists/withNewline.txt'
  // ];
  // let files = Object.keys(this.adjacencyListPath);
  let path = this.adjacencyListPath.replace(/^.*[\\\/]/, '');
  console.log(path, 'path')
  let contents = fs.readFileSync('test/adjacency_lists/' + path, 'utf8');
  let lines = contents.split('\n');
  for (var i = 0; i < lines.length; i++) {
    if (lines[i] === '') {
      lines.splice(i, 1);
    }
  }
  // lines = lines.replace(/[ ,]+/g, ",")
  return lines.length;
};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
  let path = this.adjacencyListPath.replace(/^.*[\\\/]/, '');
  console.log(path, 'path')
  let contents = fs.readFileSync('test/adjacency_lists/' + path, 'utf8');
  let arrayofLines = contents.split('\n');
  for (var i = 0; i < arrayofLines.length; i++) {
    arrayofLines[i] = arrayofLines[i].replace(/[ ,]+/g, ",");
    arrayofLines[i].split(',');
  }
  for (var i = 0; i < arrayofLines.length; i++) {
    if (arrayofLines[i][0] === node) {
      res = arrayofLines[i].split('\n,');
      res = res[0];
      res = res.split(' ');
      res.shift();
    }
  }
  return res;

};

// Returns the number of edges for the graph.
Graph.prototype.numberOfEdges = function () {
  let path = this.adjacencyListPath.replace(/^.*[\\\/]/, '');
  let contents = fs.readFileSync('test/adjacency_lists/' + path, 'utf8');
  let arrayofLines = contents.split('\n');
  for (var i = 0; i < arrayofLines.length; i++) {
    if (arrayofLines[i] === '') {
      arrayofLines.splice(i, 1);
    }
  }
  var count = 0;
  let res;
  for (var i = 0; i < arrayofLines.length; i++) {
    res = arrayofLines[i].replace(/[ ,]+/g, ",");
    res.split(',');
    count = res.length;
  }
  return count;
};

var graph = new Graph();
console.log(graph.getEdges())
module.exports = Graph;
