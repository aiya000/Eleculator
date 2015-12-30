var should         = require('should');
var MainController = require('../js/ts/MainController');
var controller     = new MainController.MainController();

describe('number clicked', function () {
	afterEach(function () {
		controller.currentText = '';
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
