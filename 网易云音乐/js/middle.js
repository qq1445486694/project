$(window).resize(function(){ 
    $("#hh2").css({ 
        position: "absolute", 
        left: ($(window).width() - $("#hh2").outerWidth())/2, 
        top: ($(window).height() - $("#hh2").outerHeight())/2 
    });        
});