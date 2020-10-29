function PathFinder() {}

/**
* 需自行實現接口函數：
* function debug(node);
* function isSameNode(m,n);
* function calcH(curNode,toNode);
* function listNeighborNode(node);
* function mapcheck(node);
*/

PathFinder.prototype.astar = function(fromNode, toNode) {
	this.openlist = new Array();
	this.closelist = new Array();

	if(!this.mapCheck(toNode)) return null;  //檢查地圖，不執行不可抵達點搜索

	let arrived = false;

	fromNode.h = this.calcH(fromNode, toNode);
	this.openlist.push(fromNode);

	for(let curNode,neighborNodeList; this.openlist.length>0;) {
		this.openlistSort(this.openlist);  //排序並取出累計最低耗費的節點
		curNode = this.openlist.pop();

		if(this.isSameNode(curNode,toNode)) { arrived = true; toNode = curNode; break; }

		neighborNodeList = this.listNeighborNode(curNode);
		for(let node;;) {
			node = neighborNodeList.pop();
			if(node==null) break;
			if(!this.mapCheck(node)) continue;  //地圖越界及障碍檢查
			if(this.compareInList(node,this.closelist)!=null) continue;  //跳過已在關閉列表的
			node.h = this.calcH(node, toNode);  //計算Ｈ値
			if(!this.doCompareInOpenlist(node,this.openlist)) {  //比較已經在開啟列表的：加入沒有的，替換高耗費的
				this.debug(node);
			}
		}

		this.closelist.push(curNode);  //將已處理過的節點放入關閉列表
	}

	if(arrived) {
		let path = new Array();
		for(let pathNode=toNode; pathNode!=null; pathNode=pathNode.parent) path.push(pathNode);
		return path;
	} else return [];
}

PathFinder.prototype.compareF = function(a,b) {
	return (a.g+a.h)-(b.g+b.h);
}

PathFinder.prototype.openlistSort = function(l) {
	//為了方便使用 pop() 函數，Ｆ値最小的排在數組最後
	//Ｆ値越小，Ｈ値越小
	l.sort(function(a,b){
		let r = (b.g+b.h)-(a.g+a.h);
		if(r<0) {
			return r;
		} else {
			r = b.h-a.h;
			if(r!=0) {
				return r;
			} else {
				return b.g-a.g;
			}
		}
	});
};

PathFinder.prototype.compareInList = function(v,l) {
	for(let i=0; i<l.length; i++) {
		if(this.isSameNode(v,l[i])) {
			return i;
//			return true;
		} else {
			continue;
		}
	}
	return null;
//	return false;
};

PathFinder.prototype.doCompareInOpenlist = function(v,l) {
	let hasNode = false;
	for(let i=0; i<l.length; i++) {
		if(this.isSameNode(v,l[i])) {
			if(this.compareF(v,l[i])<0) {
				l[i] = v;  //替換高耗費的
			}
			hasNode = true;
			return hasNode;
		} else {
			continue;
		}
	}
	l.push(v);  //加入沒有的
	return hasNode;
};

PathFinder.prototype.zoc = function(fromNode,w) {
	let l = new Array();

	let openlist = new Array();
	openlist.push(fromNode);

	for(let curNode,neighborNodeList;;) {
		openlist.sort(function(a,b){return b.g-a.g;});
		curNode = openlist.pop();
		if(curNode==null||curNode.g>w) break;
		l.push(curNode);

		neighborNodeList = this.listNeighborNode(curNode);
		for(let node,index;;) {
			node = neighborNodeList.pop();
			if(node==null) break;
			if(!this.mapCheck(node)) continue;  //地圖越界及障碍檢查
			if(node.g>w) continue;  //跳過超過移動能力Ｗ的
			if(this.compareInList(node,l)!=null) continue;  //跳過已在ＺＯＣ列表的
			index = this.compareInList(node,openlist);
			if(index!=null) { //比較已經在開啟列表的：加入沒有的，替換高耗費的
				if(node.g<openlist[index].g) {
					openlist[index] = node;
				}
			} else {  //插入排序或堆排序，以使得Ｇ値較小的節點總是靠後，這樣，就不用加入節點後都要排序一次
				openlist.push(node);
/*
				index = 0;
				for(let i=0; i<openlist.length; i++) {
					if(openlist[i].g>node.g) {
						continue;
					} else {
						index = i;
						break;
					}
				}
				openlist.splice(index,0,node);
*/
			}
		}
	}


	return l;
}

PathFinder.prototype.debug = function(node) {}
PathFinder.prototype.isSameNode = function(m,n) {}
PathFinder.prototype.calcH = function(fromNode,toNode) {}
PathFinder.prototype.listNeighborNode = function(node) {}
PathFinder.prototype.mapcheck = function(node) {}

module.exports = PathFinder;

