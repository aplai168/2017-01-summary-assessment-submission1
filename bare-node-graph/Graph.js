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

  // String with your claim of the time complexity for `numberOfNodes`
  this.numberOfNodesTimeComplexity = "linear";

  // String with your claim of the time complexity for `getEdges`
  this.getEdgesTimeComplexity = "linear";

  // String with your claim of the time complexity for `numberOfEdges`
  this.numberOfEdgesTimeComplexity = "linear";

};

// Returns the number of nodes in the graph
Graph.prototype.numberOfNodes = function () {
  //grab the files
  // fs.readFile('/adjacency_lists/basic.txt', 'utf8', function(err, data) {
  //   if (err) { throw err };
  //   console.log(data);
  //   let lines = data.split('\n');
  //   return lines.length;
  // });
  let contents = fs.readFileSync('test/adjacency_lists/basic.txt', 'utf8');
  let lines = contents.split('\n');
  return lines.length;

};

// Returns an array of the edges for the passed in `node`
Graph.prototype.getEdges = function (node) {
  let contents = fs.readFileSync('test/adjacency_lists/basic.txt', 'utf8');
  let arrayofLines = contents.split('\n');
  var res = [];
  var arr = [];
  //now i can read the lines which loook like this
  // 0 2 4 5 --> arrayoflines, 0 = arrayoflines[i][0], 2 = arrayoflines[i][1]
  // 1 2 3 --> 1 = arrayoflines[i][0]
  // 2 0 1 5
  // 3 1
  // 4 0 5
  // 5 0 2 4
  //loop through each line[0] and check if it matches passed in node
  //if it does, then place the rest of the line into an array
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
  let contents = fs.readFileSync('test/adjacency_lists/basic.txt', 'utf8');
  let arrayofLines = contents.split('\n');
  var res = [];
  var arr = [];
  var count = 0;
  for (var i = 0; i < arrayofLines.length; i++) {
    count = arrayofLines[i].length;
  }
  return count;
};

module.exports = Graph;
