(function (window)  {
	var hellospeaker = {};
	var speakword = "Hello";
	hellospeaker.speak = function speak (names) {
		console.log (speakword + " " + names);
	}
	window.hellospeaker = hellospeaker;

}) (window);