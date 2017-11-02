function moveElement(elementId,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementId)) return false;
	var elem=document.getElementById(elementId);
	if(!elem.style.left){
		elem.style.left="0px";
	}
	if(!elem.style.top){
		elem.style.top="0px";
	}
	
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	var dist=0;
	if(xpos==final_x && ypos==final_y) return true;
	if(xpos<final_x){
		dist=Math.ceil((final_x-xpos)/10);//Math.ceil(number) 取一个大于number的整数，最后一定是一个1，所以不用担心会出现到到不了。另外，Math.float()取一个最近number的整数但是小于number。Math.round()取一个最接近number的数。
		xpos+=dist;
	}
	if(xpos>final_x){
		dist=Math.ceil((xpos-final_x)/10);
		xpos-=dist;
	}
	if(ypos<final_y){
		dist=Math.ceil((final_y-ypos)/10);
		ypos+=dist;
	}
	if(ypos>final_y){
		dist=Math.ceil((ypos-final_y)/10);
		ypos-=dist;
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	elem.movement=setTimeout(function(){
							moveElement(elementId,final_x,final_y,interval)},interval);
}
/*function moveElement(elementID,final_x,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {
    elem.style.left = "0px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
    return true;
  }
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}*/