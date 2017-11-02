function addLoad(func){
	var oldload=window.onload;
	if(window.onload!='function'){
		window.onload=func;
	}else {
		window.onload=function () {
			func();
			oldload();
		}
	}	

}
