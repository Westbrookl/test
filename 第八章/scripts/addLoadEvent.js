function addLoadEvent(func){
	var oldload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else {
		window.onload = function(){
			func();
			oldload();

		}

	}

}
/*function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
//}*/