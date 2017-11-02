function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(targetElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}

}