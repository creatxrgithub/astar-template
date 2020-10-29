const sin30 = 0.5;  //Math.PI/6
const cos30 = Math.sqrt(3)/2;  //Math.PI/6
const sin60 = cos30;  //Math.PI/3

function calcPolygonPoints(x0, y0, radius) {
	let sin30radius = sin30 * radius;
	let cos30radius = cos30 * radius;
	let [x1, y1] = [x0+radius, y0];
	let [x2, y2] = [x1+sin30radius, y1+cos30radius];
	let [x3, y3] = [x2-sin30radius, y2+cos30radius];
	let [x4, y4] = [x3-radius, y3];
	let [x5, y5] = [x4-sin30radius, y4-cos30radius];
	return `${x0},${y0} ${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5}`;
}


function calcPolygonPointsByOrigin(oX, oY, radius) {
	let sin30radius = sin30 * radius;
	let cos30radius = cos30 * radius;
	let [x1,y1] = [oX-sin30radius, oY-cos30radius];
	let [x2,y2] = [oX+sin30radius, oY-cos30radius];
	let [x3,y3] = [oX+radius, oY];
	let [x4,y4] = [oX+sin30radius, oY+cos30radius];
	let [x5,y5] = [oX-sin30radius, oY+cos30radius];
	let [x6,y6] = [oX-radius, oY];
	return `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5} ${x6},${y6}`;
}


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

/**
 * 計算座標
 */
function getCoordinate(a,b,c) {
	let r = new Array();
	r[0]=-a; r[1]=b; r[2]=-c;
	r.sort();
	let n = r[1];
	r[0]=a+n; r[1]=b-n; r[2]=c+n;
	return r;
}

function getCoordinateNode(node) {
	let r = new Array();
	r[0]=-node.a; r[1]=node.b; r[2]=-node.c;
	r.sort();
	let n = r[1];
	let rNode = new ABCNode();
	rNode.a = node.a+n;
	rNode.b = node.b-n;
	rNode.c = node.c+n;
	rNode.parent = node.parent;
	return rNode;
}

function isSameNode(a, b) {
	let m = getCoordinateNode(a);
	let n = getCoordinateNode(b);
	if(m.a==n.a && m.b==n.b && m.c==n.c) {
		return true;
	} else {
		return false;
	}
}

function getNeighborNodes(curNode) {
	let oo = [];
	let node = new ABCNode(curNode.a+1,curNode.b,curNode.c,curNode);
	oo.push(getCoordinateNode(node));
	node = new ABCNode(curNode.a-1,curNode.b,curNode.c,curNode);
	oo.push(getCoordinateNode(node));
	node = new ABCNode(curNode.a,curNode.b+1,curNode.c,curNode);
	oo.push(getCoordinateNode(node));
	node = new ABCNode(curNode.a,curNode.b-1,curNode.c,curNode);
	oo.push(getCoordinateNode(node));
	node = new ABCNode(curNode.a,curNode.b,curNode.c+1,curNode);
	oo.push(getCoordinateNode(node));
	node = new ABCNode(curNode.a,curNode.b,curNode.c-1,curNode);
	oo.push(getCoordinateNode(node));
	return oo;
}


module.exports = {ABCNode, calcPolygonPoints, calcPolygonPointsByOrigin, getCoordinate, getCoordinateNode, isSameNode, getNeighborNodes};
