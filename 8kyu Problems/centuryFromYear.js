// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes

// Enjoy Learning !!!

// My very long solution
// Only problem is it only works until year 2000. Doesn't go beyond that.
function century(year) {
	if (year >= 1 && year <= 100) {
		return 1;
	}
	if (year >= 101 && year <= 200) {
		return 2;
	}
	if (year >= 201 && year <= 300) {
		return 3;
	}
	if (year >= 301 && year <= 400) {
		return 4;
	}
	if (year >= 401 && year <= 500) {
		return 5;
	}
	if (year >= 501 && year <= 600) {
		return 6;
	}
	if (year >= 601 && year <= 700) {
		return 7;
	}
	if (year >= 701 && year <= 800) {
		return 8;
	}
	if (year >= 801 && year <= 900) {
		return 9;
	}
	if (year >= 901 && year <= 1000) {
		return 10;
	}
	if (year >= 1001 && year <= 1100) {
		return 11;
	}
	if (year >= 1101 && year <= 1200) {
		return 12;
	}
	if (year >= 1201 && year <= 1300) {
		return 13;
	}
	if (year >= 1301 && year <= 1400) {
		return 14;
	}
	if (year >= 1401 && year <= 1500) {
		return 15;
	}
	if (year >= 1501 && year <= 1600) {
		return 16;
	}
	if (year >= 1601 && year <= 1700) {
		return 17;
	}
	if (year >= 1701 && year <= 1800) {
		return 18;
	}
	if (year >= 1801 && year <= 1900) {
		return 19;
	}
	if (year >= 1901 && year <= 2000) {
		return 20;
	}
}

// A better, much shorter way to solve the problem that will give you any year
function century(year) {
	if (year <= 100) {
		return 1;
	} else {
		return century(year - 100) + 1;
	}
}
