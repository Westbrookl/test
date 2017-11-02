function getHttpObject(){
	if(typeof XMLHttpRequest == "undefined")
		XMLHttpRequest=function(){
			try{return new ActiveXObject("Msxm12.XMLHTTP 6.0");}
			catch(e){}
			try{return new ActiveXObject("Msxm12.XMLHTTP 3.0");}
			catch(e){}
			try{return new ActiveXObject("Msxm12.XMLHTTP 2.0");}
			catch(e){}
			return false;
		}
	return new XMLHttpRequest();
}
