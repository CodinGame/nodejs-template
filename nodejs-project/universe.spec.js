﻿var assert = require('assert');
var countAllStars = require('./exercises/universestub.js');
var shouldShowHint = true;
var reduceUsed = false;
var superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
	reduceUsed = true;
	return superReduce.apply(this, arguments);
}

function verifyCountAllStars() {
	shouldShowHint = true;
	assert.equal(6, countAllStars([1, 2, 3]));
	assert.equal(16, countAllStars([10, 3, 2, 1]));
	assert.equal(42, countAllStars([20, 20, 2]));
	shouldShowHint = false;
}

it('verifyCountAllStars()', verifyCountAllStars);

afterEach(() => {
	cleanup();
	success(!shouldShowHint);
})

function cleanup() {
	if (shouldShowHint) {
		printMessage('Hint 💡', 'Did you properly accumulate all stars into \'totalStars\'? 🤔');
	}
	else {
		if (reduceUsed) {
			printMessage('My personal Yoda, you are. 🙏', '* ● ¸ .　¸. :° ☾ ° 　¸. ● ¸ .　　¸.　:. • ');
			printMessage('My personal Yoda, you are. 🙏', '           　★ °  ☆ ¸. ¸ 　★　 :.　 .   ');
			printMessage('My personal Yoda, you are. 🙏', '__.-._     ° . .　　　　.　☾ ° 　. *   ¸ .');
			printMessage('My personal Yoda, you are. 🙏', '\'-._\\7\'      .　　° ☾  ° 　¸.☆  ● .　　　');
			printMessage('My personal Yoda, you are. 🙏', ' /\'.-c    　   * ●  ¸.　　°     ° 　¸.    ');
			printMessage('My personal Yoda, you are. 🙏', ' |  /T      　　°     ° 　¸.     ¸ .　　  ');
			printMessage('My personal Yoda, you are. 🙏', '_)_/LI');
		} else {
			printMessage('Hint 💡', 'Do you know what do the function reduce in javascript? 🤔');
		}
	}
}
function printMessage(channel, message) {
	console.log('TECHIO> message --channel "' + channel + '" "' + message + '"');
}
function success(success) {
	console.log('TECHIO> success '+ success);
}