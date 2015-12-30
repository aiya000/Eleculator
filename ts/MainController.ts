/// <reference path="../typings/angularjs/angular.d.ts"/>


/**
 * index.htmlをViewとするMVCのうちControllerを担います。
 * @class MainController
 */
export class MainController {
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
	public constructor() {
		this.resultText  = '0';
		this.currentText = '';
	}

	/* --- --- --- public method --- --- --- */
	/**
	 * [0-9]の範囲の数値(を表す文字)を受け取り、文字列currentNumの末尾に付け足します。
	 * @event numberClicked
	 * @param numAsChar {String} [0-9]の数値を表す文字
	 */
	public numberClicked(numAsChar: string) {
		this.currentText = this.currentText + numAsChar;
	}

	/**
	 * TODO: 書く
	 * @event operatorClicked
	 * @param operator {String} +, -, *, / いずれかの演算子
	 */
	public operatorClicked(operator: string) {
		let resultNum:  number = Number(this.resultText);
		let currentNum: number = Number(this.currentText);  // (n => n), ('' => 0)
		switch (operator) {
		case '+':
			this.resultText  = String(resultNum + currentNum);
			break;
		case '-':
			this.resultText  = String(resultNum - currentNum);
			break;
		case '*':
			this.resultText  = String(resultNum * currentNum);
			break;
		case '/':
			if (currentNum === 0) {
				return;
			}
			this.resultText  = String(resultNum / currentNum);
			break;
		default:
			throw new Error('operatorClicked functionにありえない引数 ("' + operator + '") が指定されました');
		}
		this.currentText = '';
	}

	/**
	 * TODO: 書く
	 * @event clearClicked
	 */
	public clearClicked() {
		this.resultText  = '0';
		this.currentText = ''
	}

	/**
	 * TODO: 書く
	 * @event backspaceClicked
	 */
	public backspaceClicked() {
		if (this.currentText.length === 0) {
			return;
		}
		this.currentText = this.currentText.substring(1, this.currentText.length);
	}
}
