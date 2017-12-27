var header=document.getElementsByTagName('header')[0];
var section=document.getElementsByTagName('section');
function hasClass(ele,cls) { 
return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')); 
} 
function addClass(ele,cls) { 
if (!this.hasClass(ele,cls)) ele.className += " "+cls; 
} 
header.style.animation="touming 0s 1 forwards";//解决bug
document.onmousewheel=function (argument) {
	if(hasClass(section[0],"swiper-slide-active")){	
		header.style.animation="touming 0.3s 1 forwards";
	}else{
		header.style.animation="darken 0.3s 1 forwards";
	}
}