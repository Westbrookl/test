function showPic(whichpic){
	if(!document.getElementById("placeholder")) return true;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if (!document.getElementById("description")) return false;
	var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
	var description=document.getElementById("description");
	if(description.firstChild.nodeType==3) description.firstChild.nodeValue=text;
	return false
/*  if (whichpic.getAttribute("title")) {
    var text = whichpic.getAttribute("title");
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;
	 if(!document.getElementById("description")) return false;
	if(whichpic.getAttribute("title")) var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
	var description=document.getElementBy("description");
	if(description.firstChlid.nodeType==3) description.firstChild.nodeValue=text;
	return false;
var placeholder=document.getElementById("placeholder");
 var source=whichpic.getAttribute("href");
 placeholder.setAttribute("src",source);
 if(whichpic.getAttribute("title")){
 var description=document.getElementById("description");
 var text=whichpic.getAttribute("title");
 if(description.firstChild.nodeType==3) description.firstChild.nodeValue=text;
}
return false;
  if (!document.getElementById("placeholder")) return true;
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src",source);
  if (!document.getElementById("description")) return false;
  if (whichpic.getAttribute("title")) {
    var text = whichpic.getAttribute("title");
  } else {
    var text = "";
  }
  var description = document.getElementById("description");
  if (description.firstChild.nodeType == 3) {
    description.firstChild.nodeValue = text;
  }
  return false;*/

}
function prepareGallery(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	var gallery=document.getElementById("imagegallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showPic(this);
	}
		links[i].onekeypress=links[i].onclick;
	
	}


}
function addLoadEvent(func){
	var oldonload=window.onload;
if(window.onload!='function'){//attention判断是不是方法'function'
	window.onload=func;
	}
else {
	window.onload=function(){
		oldonload();
		func();
		}
	}	

}

addLoadEvent(prepareGallery);
