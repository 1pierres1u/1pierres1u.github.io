/* Center the main div of the index page */
function center_vertically()
{       var documentH = $(window).height();
	var windowH  = $(document).height();
	var headerH  = $("div#header").height();
	var contentH = $('div#home_wrapper').height();
	var imageH  = $('div#homw_wrapper > img').height();
	var footerH = $('div#footer').height();
	var homeContentH = $('div#home_content').height();
 	//var X = Math.floor((windowH - headerH - contentH-5*imageH)/2);
	var X = Math.floor((windowH - headerH - homeContentH - footerH)/2);
	//$("div#home_wrapper").css("margin-top",X.toString()+"px");
	$("div#home_content").css("padding-top",X.toString()+"px");

	console.log("windowH = " + documentH.toString() + " documentH = " + windowH.toString());
	console.log("headerH = "+ headerH.toString());
	console.log("homeContentH = "+ homeContentH.toString());
	console.log("footerH = "+ footerH.toString());
	console.log("X = "+ X.toString());
}

center_vertically();
window.resize = center_vertically();


