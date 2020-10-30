# astar (a*) path finder

npm install astar-template

const PathFinder = require('astar-template')

let finder = new PathFinder();

finder.debug = function (node) {}

......

let apath = finder.astar(fromNode, toNode);

if(apath.length=0) {
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

https://github.com/creatxrgithub/articles/blob/master/%E5%8E%9F%E5%8A%8D.IT.%E5%85%AD%E9%82%8A%E5%BD%A2%E7%BD%91%E6%A0%BC%E4%B8%89%E7%B6%AD%E5%B9%B3%E9%9D%A2%E7%B3%BB%E7%B5%B1%E7%A0%94%E7%A9%B6.txt



## define Node, must with field parent, g, h
```
class ABCNode {
	constructor(a=null, b=null, c=null, src=null) {
		this.parent = src;
		this.a = a;
		this.b = b;
		this.c = c;
		this.g = 0;
		this.h = 0;
	}
}

class XYNode {
	constructor(x=null, y=null, src=null) {
		this.parent = src;
		this.x = x;
		this.y = y;
		this.g = 0;
		this.h = 0;
	}
}
```


