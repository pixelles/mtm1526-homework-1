var letter;

while (!letter) {
	letter = prompt('What is your favourite letter?');
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




































