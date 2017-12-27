var request = new XMLHttpRequest();
request.open('GET', 'injso.json', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    sl7=document.getElementById('swiper-slide7-content').getElementsByTagName('div');
    for (var i = sl7.length - 1; i >= 0; i--) {
    	// sl7[i].innerHTML='<img src='+data.d[i].img+' alt="" class="grayscale" /><p class="mask"><span>'+data.d[i].span+'</span><span>'+data.d[i].span_2+'</span></p><h4>'+data.d[i].name+'</h4>'
    	sl7[i].getElementsByTagName('img')[0].src=data.d[i].img;
    	sl7[i].getElementsByTagName('span')[0].innerHTML+=data.d[i].span;
    	sl7[i].getElementsByTagName('span')[1].innerHTML+=data.d[i].span_2;
    	sl7[i].getElementsByTagName('h4')[0].innerHTML+=data.d[i].name;
    };
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();