// http://stackoverflow.com/a/9517879/3707721
function injectScript(f) {
	var actualCode = '(' + f + ')();';
	var script = document.createElement('script');
	script.textContent = actualCode;
	(document.head||document.documentElement).appendChild(script);
	script.parentNode.removeChild(script);
}

inject(function(){
	var volume = 1; // slider goes 1 to 10
	soundManager.setVolume(volume * 10); // soundManager goes 1 to 100
	angular.element('.vslider').slider('setValue', '' + volume);
});