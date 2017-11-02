
function getNewContent(){
	var request=getHttpObject();
	if(request){
		request.open("GET","example.txt",true);
		request.onreadystatechange=function(){
			if(request.readyState==4){
				var para=document.createElement("p");
				var txt=document.createTextNode(request.responseText);
				para.appendChlid(txt);
				document.getElementById("new").appendChild(para);

			}
		}
	}else{

		alert("sorry your browser not support XMLHttpRequest");
	}

}
addLoadEvent(getNewContent);
