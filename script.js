(function () {

	var names = ["Yakov", "John", "Jen", "Jason", "Pau", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i= 0; i < names.length; i++){

	
	ethods on Mozilla Developer Network web site if needed.
	var firstLetter = name[i].charAt(0).tolowerCase();

	
	if (firstLetter === 'j') {
		byeSpeaker.speak(names[i]);
	} else {
		helloSpeaker.speak(names[i]);
	}
}

})()