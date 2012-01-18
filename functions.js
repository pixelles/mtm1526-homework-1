var letter;

while (!letter) {
	letter = prompt('What is your favourite letter?');
}


function isLetterCool () {
	var name = prompt('What is your name?');
	
	if (name == 'Thomas') {
		document.write('That is an awesome name!');
	} else {
		document.write("I don't like your name.");
	}
}

var writeLetterMultipleTimes = function () {
	for (var j = 0; j < 11; j++) {
		document.write();
		for (var i = 1; i < j; i++ ) {
		document.write(letter);
		}
		
		document.write('<br>');
	}
};



writeLetterMultipleTimes();




































