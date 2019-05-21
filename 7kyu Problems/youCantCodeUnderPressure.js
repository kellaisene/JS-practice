// Code as fast as you can!

// You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.

class Counter {
	constructor() {
		this.count = 0;
	}
	increment() {
		return (this.count += 1);
	}
	check() {
		return this.count;
	}
}

function Counter() {
	var counter = 0;
	this.check = function() {
		return counter;
	};
	this.increment = function() {
		counter++;
	};
}

function Counter() {
	var counter = 0;
	this.check = () => counter;
	this.increment = () => counter++;
}

function Counter() {
	var i = 0;

	//quickly, now!
	this.check = () => {
		return i;
	};
	this.increment = () => {
		i++;
	}; //
}
