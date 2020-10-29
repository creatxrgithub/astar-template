# astar (a*) path finder

npm install astar-template

const PathFinder = require('astar-template')

let finder = new PathFinder();

finder.debug = function (node) {}

......

let apath = finder.astar(fromNode, toNode);

if(apath==null) {
  //cannot arrive
} else {
  //apath is array of nodes
}


# must implement your：

## function finder.debug(node);
## function finder.isSameNode(m,n);
## function finder.calcH(curNode,toNode);
## function finder.listNeighborNode(node);
## function finder.mapcheck(node);

<img src='demo.gif'>

![Alt text](./demos/astar-abc.svg)
<img src='./demos/astar-abc.svg'>
