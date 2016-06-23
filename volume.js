// http://stackoverflow.com/a/9517879/3707721
function injectScript(f, a) {
	var actualCode = '(' + f + ')(' + JSON.stringify(a) + ');';
	var script = document.createElement('script');
	script.textContent = actualCode;
	(document.head||document.documentElement).appendChild(script);
	script.parentNode.removeChild(script);
}

chrome.storage.sync.get({volume: 1}, function(items){
	injectScript(function(volume){
		// move the slider bar itself
		angular.element('.vslider').slider('setValue', '' + volume);
		// then fake the slide event as if the user had moved the slider
		var event = $.Event('slide');
		event.value = volume;
		$('.vslider').trigger(event);
	}, items.volume);
});