var currentpos, timer;   
function initialize() {   
	timer = setInterval("scrollwindow()", 80);   
}   
function sc() {   
	clearInterval(timer);   
}   
function scrollwindow() {   
	var scrollPos;   
	if (typeof window.pageYOffset != 'undefined') {   
		scrollPos = window.pageYOffset;   
	} else if (typeof document.compatMode != 'undefined'   
			&& document.compatMode != 'BackCompat') {   
		scrollPos = document.documentElement.scrollTop;   
	} else if (typeof document.body != 'undefined') {   
		scrollPos = document.body.scrollTop;   
	}   
	
	currentpos = scrollPos;  
	//document.getElementById("AdLayer2").style.top=parseInt(scrollPos)+80+"px"; 
	window.scroll(0, ++currentpos);   
	if (currentpos == scrollPos) {   
		//sc();   
	}
}   
document.onmousedown = sc; 
document.ondblclick = initialize; 
timer = setInterval("scrollwindow()", 80);  
//window.onscroll=function(){
//	if (typeof window.pageYOffset != 'undefined') {   
//		sco = window.pageYOffset;   
//	} else if (typeof document.compatMode != 'undefined'   
//			&& document.compatMode != 'BackCompat') {   
//		sco = document.documentElement.scrollTop;   
//	} else if (typeof document.body != 'undefined') {   
//		sco = document.body.scrollTop;   
//	} 
//	//document.getElementById("AdLayer2").style.top=parseInt(sco) + 80 + "px";
//}