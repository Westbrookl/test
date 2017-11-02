function addLoadEvent(func){
	var oldload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			func();
			oldload();
		}
	}

}
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
function addClass(elem,value){//为元素添加一个class属性
	if(!elem.className){
		elem.className=value;
	}else{
		var oldClass=elem.className;
		oldClass+=" ";
		oldClass+=value;
		elem.className=oldClass;
	}
}
function highlightPage(){
	if(!document.getElementsByTagName) return false;
	var header=document.getElementsByTagName("header");
	if(header.length==0) return false;
	var nav=header[0].getElementsByTagName("nav");
	if(nav.length==0) return false;
	var links=nav[0].getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		var linkhref=links[i].getAttribute("href");
		if(window.location.href.indexOf(linkhref)!=-1){
			links[i].className="here";
		}
	}
}
addLoadEvent(highlightPage);