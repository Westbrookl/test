function displayAbbreviations(){
	if(!document.getElemntsByTagName||!document.createElement||!document.creatTextNode) return false;
	var dl=document.createElement("dl");
	var abbrs=document.getElemntsByTagName("abbr");
	if(abbrs.length<1) return false;
	var defs=new Array();
	for(var i=0;i<abbrs.length;i++){
		var defination=abbrs[i].getAttribute("title");
		var key=abbrs[i].lastChild.nodeValue;
		defs[key]=defination;
	}//遍历这些缩略词
	for(key in defs){
		var dt=document.createElement("dt");
		var dt_text=document.createTextNode(key);
		dt.appendChild(dt_text);
		var dd=document.createElement("dd");
		var dd_text=document.createTextNode(defs[key]);
		dd.appendChild(dd_text);
		dl.appendChild(dt);
		dl.appendChild(dd);
	}
	var header=document.createElement("p");
	var content=document.createTextNode("Abbreviation")
	header.apppendChild(content);
	document.body.appendChild(header);
	document.body.appendChild(dl);
}
addLoadEvent(displayAbbreviations);