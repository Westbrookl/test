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