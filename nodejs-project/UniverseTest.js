﻿var assert = require('assert');
var countAllStars = require('./Exercises/UniverseStub.js');
var shouldShowHint = true;

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
		printMessage('My personal Yoda, you are. 🙏', '* ● ¸ .　¸. :° ☾ ° 　¸. ● ¸ .　　¸.　:. • ');
		printMessage('My personal Yoda, you are. 🙏', '           　★ °  ☆ ¸. ¸ 　★　 :.　 .   ');
		printMessage('My personal Yoda, you are. 🙏', '__.-._     ° . .　　　　.　☾ ° 　. *   ¸ .');
		printMessage('My personal Yoda, you are. 🙏', '\'-._\\7\'      .　　° ☾  ° 　¸.☆  ● .　　　');
		printMessage('My personal Yoda, you are. 🙏', ' /\'.-c    　   * ●  ¸.　　°     ° 　¸.    ');
		printMessage('My personal Yoda, you are. 🙏', ' |  /T      　　°     ° 　¸.     ¸ .　　  ');
		printMessage('My personal Yoda, you are. 🙏', '_)_/LI');
	}
}
function printMessage(channel, message) {
	console.log('TECHIO> message --channel "' + channel + '" "' + message + '"');
}
function success(success) {
	console.log('TECHIO> success '+ success);
}