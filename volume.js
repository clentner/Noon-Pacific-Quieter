// http://stackoverflow.com/a/9517879/3707721
function injectScript(f) {
	var actualCode = '(' + f + ')();';
	var script = document.createElement('script');
	script.textContent = actualCode;
	(document.head||document.documentElement).appendChild(script);
	script.parentNode.removeChild(script);
}

inject(function(){
	var volume = 1;
	// move the slider bar itself
	angular.element('.vslider').slider('setValue', '' + volume);
	// then fake the slide event as if the user had moved the slider
	var event = $.Event('slide');
	event.value = volume;
	$('.vslider').trigger(event);
});