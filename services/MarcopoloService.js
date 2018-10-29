var config = require('../config');


function MarcopoloService() {
	this.filteredNumbers = {
		"marco": [],
		"polo": [],
		"marcopolo": []
	};
	this.marcopoloNumbers = [];
	console.log('--------------------------------------');
	console.log('----- Loading Marcopolo Service ------');
	console.log('--------------------------------------');
	console.log();
	for (var i = config.minNumber; i < config.maxNumber; i++) {
		if (i % config.NumberForMarco === 0 && i % config.NumberForPolo === 0) {
			this.marcopoloNumbers.push(config.choices[2])
			continue;
		}
		if (i % config.NumberForMarco === 0) {
			this.marcopoloNumbers.push(config.choices[0])
			this.filteredNumbers.marco.push(i);
			continue;
		}
		if (i % config.NumberForPolo === 0) {
			this.marcopoloNumbers.push(config.choices[1])
			this.filteredNumbers.polo.push(i);
			continue;
		}
		this.marcopoloNumbers.push(i)
	}
	console.log('--------------------------------------');
	console.log('------ Marcopolo Service Loaded ------');
	console.log('--------------------------------------');
	console.log();
	
	console.log('--------------------------------------');
	console.log('Total Marco  Numbers: ', this.filteredNumbers[config.choices[0]].length);
	console.log('--------------------------------------');
	console.log('Total Polo Numbers: ', this.filteredNumbers[config.choices[1]].length);
	console.log('--------------------------------------');
	console.log('Total Marcopolo Numbers: ', this.filteredNumbers[config.choices[0]].concat(this.filteredNumbers[config.choices[1]]).length);
	console.log('--------------------------------------');
}

MarcopoloService.prototype.getNumbers = function(key) {
	if (key == config.choices[2]) {
		return this.filteredNumbers[config.choices[0]].concat(this.filteredNumbers[config.choices[1]]);
	}
	return this.filteredNumbers[key];
};

module.exports = new MarcopoloService();

