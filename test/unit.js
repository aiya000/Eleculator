var should         = require('should');
var MainController = require('../js/ts/MainController');
var controller     = new MainController();

describe('clear button', function () {
	it('should reset value of resultText and currentText', function () {
		controller.resultText  = '644';
		controller.currentText = '777';
		controller.clearClicked();
		controller.resultText.should.equal('0');
		controller.currentText.should.equal('');
	});
});

describe('number clicked', function () {
	afterEach(function () {
		controller.clearClicked();
	});
	it('1 button set number to textfield', function () {
		controller.numberClicked('1');
		controller.currentText.should.equal('1');
	});
	it('2 button set number to textfield', function () {
		controller.numberClicked('2');
		controller.currentText.should.equal('2');
	});
	it('3 button set number to textfield', function () {
		controller.numberClicked('3');
		controller.currentText.should.equal('3');
	});
	it('4 button set number to textfield', function () {
		controller.numberClicked('4');
		controller.currentText.should.equal('4');
	});
	it('5 button set number to textfield', function () {
		controller.numberClicked('5');
		controller.currentText.should.equal('5');
	});
	it('6 button set number to textfield', function () {
		controller.numberClicked('6');
		controller.currentText.should.equal('6');
	});
	it('7 button set number to textfield', function () {
		controller.numberClicked('7');
		controller.currentText.should.equal('7');
	});
	it('8 button set number to textfield', function () {
		controller.numberClicked('8');
		controller.currentText.should.equal('8');
	});
	it('9 button set number to textfield', function () {
		controller.numberClicked('9');
		controller.currentText.should.equal('9');
	});
	it('0 button set number to textfield', function () {
		controller.numberClicked('0');
		controller.currentText.should.equal('0');
	});
	it('1, 2, 3 button set numbers to textfield', function () {
		controller.numberClicked('1');
		controller.numberClicked('2');
		controller.numberClicked('3');
		controller.currentText.should.equal('123');
	});
});

function inputOperatorWith123(operator) {
	controller.numberClicked('1');
	controller.numberClicked('2');
	controller.numberClicked('3');
	controller.operatorClicked(operator)
}
describe('operator button', function () {
	afterEach(function () {
		controller.clearClicked();
	});
	it('+ button calc result num', function () {
		var phase1 = 0 + 123;
		var phase2 = phase1 + 123;
		// phase (0 + 123)
		inputOperatorWith123('+');
		controller.resultText.should.equal(String(phase1));
		// phase (123 + 123)
		inputOperatorWith123('+');
		controller.resultText.should.equal(String(phase2));
	});
	it('- button calc result num', function () {
		var phase1 = 0 - 123;
		var phase2 = phase1 - 123;
		// phase (0 - 123)
		inputOperatorWith123('-');
		controller.resultText.should.equal(String(phase1));
		// phase (123 - 123)
		inputOperatorWith123('-');
		controller.resultText.should.equal(String(phase2));
	});
	it('* button calc result num', function () {
		var phase1 = 1 * 123;
		var phase2 = phase1 * 123;
		// phase (1 * 123)
		controller.numberClicked('1');
		controller.operatorClicked('+');
		inputOperatorWith123('*');
		controller.resultText.should.equal(String(phase1));
		// phase (123 * 123)
		inputOperatorWith123('*');
		controller.resultText.should.equal(String(phase2));
	});
	it('/ button calc result num', function () {
		var phase1 = 1 / 123;
		var phase2 = phase1 / 123;
		// phase (1 / 123)
		controller.numberClicked('1');
		controller.operatorClicked('+');
		inputOperatorWith123('/');
		controller.resultText.should.equal(String(phase1));
		// phase (123 / 123)
		inputOperatorWith123('/');
		controller.resultText.should.equal(String(phase2));
	});
});
