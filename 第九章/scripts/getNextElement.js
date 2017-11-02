function getNextElement(node){
	if(node.nodeType==1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}
addLoad(getNextElement);
/*寻找下个元素节点 
 首先  判断输入的节点是不是元素节点，要注意的是传入getNextElement(header[i].nextSibiling)
 然后  判断它的下个节点是不是存在，如果存在的话迭代输入到getNextElement(node.nextSibling)
 最后  如果不满足条件的话，返回值是NULL
						
