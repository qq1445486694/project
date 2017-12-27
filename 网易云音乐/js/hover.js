var mask=getElementsClass('mask');
var graysc=document.getElementById('swiper-slide7-content').getElementsByTagName('div');
for (let i = graysc.length - 1; i >= 0; i--) {
	graysc[i].onmouseover=function (argument) {
		mask[i].style.display="block"
	}
	graysc[i].onmouseout=function (argument) {
		mask[i].style.display="none"
	}
};