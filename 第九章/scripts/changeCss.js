function changeCss(){
	if(!document.getElementsByTagName) return false;
	var header.getElementsByTagName("h1");
	for(var i=0;i<header.length;i++){
		var elem=getNextElement(header[i].nextSibling);
		elem.style.color='grey';
		elem.style.fontSize="1.2em";
	}
}
addLoad(changeCss);