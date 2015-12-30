/// <reference path="../typings/angularjs/angular.d.ts"/>


/**
 * index.htmlをViewとするMVCのうちControllerを担います。
 * @class MainController
 */
class MainController {
	/* --- --- --- private field --- --- --- */
	/**
	 * 計算結果を格納するテキストエリアの文字列を格納します。
	 * @property resultText
	 * @type String
	 * @default '0'
	 */
	private resultText: string;

	/**
	 * 現在入力中の数値を格納するテキストエリアの文字列を格納します。
	 * @property resultText
	 * @type String
	 * @default ''
	 */
	private currentText: string;

	/* --- --- --- public constructor --- --- --- */
	/**
	 * @constructor
	 */
	constructor() {
		this.resultText  = '0';
		this.currentText = '';
	}

	/* --- --- --- public method --- --- --- */
	/**
	 * [0-9]の範囲の数値(を表す文字)を受け取り、文字列currentNumの末尾に付け足します。
	 * @event numberClicked
	 * @param numAsChar {String} [0-9]の数値を表す文字
	 */
	numberClicked(numAsChar: string) {
		this.currentText = this.currentText + numAsChar;
	}
}
