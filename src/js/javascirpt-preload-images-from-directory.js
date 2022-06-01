// JavaScript Document
function preloadImagesFromDirectory(dir) {
	if (!dir) return;
	function getJSON(URL, success) {
		// Create new function (within global namespace) (With unique name):
		var uniqueID = "json" + +new Date();
		window[uniqueID] = function (data) {
			success && success(data);
		};

		// Append new SCRIPT element to DOM:
		document.getElementsByTagName("body")[0].appendChild(
			(function () {
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.src = URL.replace("callback=?", "callback=" + uniqueID);
				return script;
			})()
		);
	}

	function preload(srcArray) {
		for (var i = 0; i < srcArray.length; i++) {
			new Image().src = srcArray[i];
		}
	}

	console.log("preloaded!");
}

window.onload = function () {
	preloadImagesFromDirectory("../img/");
};
