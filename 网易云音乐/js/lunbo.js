var lunbo_inner=document.getElementsByClassName('lunbo_inner')[0];

var lunbo_left_btn=document.getElementsByClassName('lunbo_left_btn')[0];
var lunbo_right_btn=document.getElementsByClassName('lunbo_right_btn')[0];
var vvv=0;
if(vvv==0){
	lunbo_right_btn.style.visibility="hidden";	
}
lunbo_left_btn.onclick=function (argument) {
	vvv-=270;
	for (var i =lunbo_inner.getElementsByTagName('div').length - 1; i >= 0; i--) {
		lunbo_inner.getElementsByTagName('div')[i].style.webkitTransform="translate("+vvv+"px,0px)";
		lunbo_inner.getElementsByTagName('div')[i].style.transition = '-webkit-transform 1s';
	};
	if(vvv<=-1890){
		lunbo_left_btn.style.visibility="hidden";	
	}else{
		lunbo_right_btn.style.visibility="visible";
	}
}
lunbo_right_btn.onclick=function (argument) {
	vvv+=270;
	for (var i =lunbo_inner.getElementsByTagName('div').length - 1; i >= 0; i--) {
		lunbo_inner.getElementsByTagName('div')[i].style.webkitTransform="translate("+vvv+"px,0px)";
		lunbo_inner.getElementsByTagName('div')[i].style.transition = '-webkit-transform 1s';
	};
	if(vvv==0){
		lunbo_right_btn.style.visibility="hidden";	
	}else{
		lunbo_left_btn.style.visibility="visible";
	}
}