var config = require('../config');

function getNumbers(key) {
	let marcopoloNumbers = [];
	for (var i = config.minNumber; i <= config.maxNumber; i++) {
		if (((i % config.NumberForMarco) == 0) && ((i % config.NumberForPolo) == 0)) {
			marcopoloNumbers.push(config.choices[2]);
			continue;
		}
		if ((i % config.NumberForMarco) == 0) {
			marcopoloNumbers.push(config.choices[0]);
			continue;
		}
		if ((i % config.NumberForPolo) == 0) {
			marcopoloNumbers.push(config.choices[1]);
			continue;
		}
		marcopoloNumbers.push(i)
	}
	return marcopoloNumbers;
};

module.exports = {
	getNumbers
};
