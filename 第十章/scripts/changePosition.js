function changePostition(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem=document.getElementById("message");
	elem.style.position="absolute";
	elem.style.left="50px";
	elem.style.top="150px";
	abstractMoveMessage("message",100,200,10);
}

function addLoad(func){
	var oldLoad=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;

	}else{

		window.onload=function() {
			func();
			oldLoad();

		}
	}

}
function abstractMoveMessage(elementId,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementId)) return false;
	var elem=document.getElementById(elementId);
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(xpos==final_x && ypos==final_y){
		return true;
	}
	if(xpos<final_x) xpos++;
	if(xpos>final_x) xpos--;
	if(ypos<final_y) ypos++;
	if(ypos>final_y) ypos--;
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	setTimeout(function(){
							abstractMoveMessage(elementId,final_x,final_y,interval)},interval);



}

addLoad(changePostition);
addLoad(abstractMoveMessage);