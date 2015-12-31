/// <reference path="../typings/angularjs/angular.d.ts"/>
let MainController = require('./js/ts/MainController');

angular
	.module('eleculator', [])
	.controller('MainController', [MainController])
	;
