/* Center the main div of the index page */
function center_vertically()
{
	var windowH  = $(window).height();
	var headerH  = $("div#header").height();
	var contentH = $('div#home_wrapper').height();
	var imageH  = $('div#homw_wrapper > img').height();
	var X = Math.floor((windowH - headerH - contentH-5*imageH)/2);
	$("div#home_wrapper").css("margin-top",X.toString()+"px");
}

center_vertically();
window.resize = center_vertically();


