(function (window)  {
	var byespeaker = {};
	var speakword = "Goodbye";
	byespeaker.speak = function speak (names) {
		console.log (speakword + " " + names);
	}
	window.byespeaker = byespeaker;

} ) (window);