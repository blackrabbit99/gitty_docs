(function (exports) {
	'use strict';
	var VERSION,
	gitty,
	doctrine = require('doctrine'),
	info = doctrine.parse(
	[
		"/**",
		" * This function comment is parsed by doctrine",
		" * @param {{ok:String}} userName",
		" * @type fddfsdfsd",
		" * @description 777777777",
		"*/",
		"dsdfds",
		"76769+878"
	].join('\n'), { unwrap: true });

	console.dir(info);
}(typeof exports === 'undefined' ? (gitty = {}) : exports));