/*function addLoadEvent(func){
	var oldLoad=window.onload;
	if(window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldLoad();
			func();
		}

	}

}
*/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}