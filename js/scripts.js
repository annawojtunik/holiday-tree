// plik scripts.js

function rysujChoinke(h) {
	for (var level = 1 ; level <= h ; level++) {
		var star = '*';
		for (var n = 1; n < (2 * level - 1); n++) {
			star += '*';
		}
	console.log(star);
	}
}
rysujChoinke(6);