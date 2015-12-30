/// <reference path="../typings/angularjs/angular.d.ts"/>
import MainController = require('./MainController');

angular
	.module('eleculator', [])
	.controller('MainController', [MainController])
	;
