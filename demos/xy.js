class XYNode {
	constructor(x=null, y=null, src=null) {
		this.parent = src;
		this.x = x;
		this.y = y;
		this.g = 0;
		this.h = 0;
	}
}

function isSameNode(a,b) {
	if(a.x==b.x&&a.y==b.y) {
		return true;
	} else {
		return false;
	}
};

function getNeighborNodes(curNode) {
	let l = new Array();

	let eNode = new XYNode();
	eNode.x = curNode.x+1;
	eNode.y = curNode.y;
	eNode.parent = curNode;
	l.push(eNode);

	let wNode = new XYNode();
	wNode.x = curNode.x-1;
	wNode.y = curNode.y;
	wNode.parent = curNode;
	l.push(wNode);

	let sNode = new XYNode();
	sNode.x = curNode.x;
	sNode.y = curNode.y+1;
	sNode.parent = curNode;
	l.push(sNode);

	let nNode = new XYNode();
	nNode.x = curNode.x;
	nNode.y = curNode.y-1;
	nNode.parent = curNode;
	l.push(nNode);

	let esNode = new XYNode();
	esNode.x = curNode.x+1;
	esNode.y = curNode.y+1;
	esNode.parent = curNode;
	l.push(esNode);

	let enNode = new XYNode();
	enNode.x = curNode.x+1;
	enNode.y = curNode.y-1;
	enNode.parent = curNode;
	l.push(enNode);

	let wsNode = new XYNode();
	wsNode.x = curNode.x-1;
	wsNode.y = curNode.y+1;
	wsNode.parent = curNode;
	l.push(wsNode);

	let wnNode = new XYNode();
	wnNode.x = curNode.x-1;
	wnNode.y = curNode.y-1;
	wnNode.parent = curNode;
	l.push(wnNode);

	return l;
};


module.exports = {XYNode, isSameNode, getNeighborNodes};
