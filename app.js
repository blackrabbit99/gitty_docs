(function (exports) {
	'use strict';
	var VERSION,
	gitty,
	doctrine = require('doctrine'),
	wrench = require('wrench'),
	fs = require('fs'),
	esprima = require("esprima"),
	options = {
		extensions: ["js"]
	},
	info = doctrine.parse(
	[
		"/**",
		" * This function comment is parsed by doctrine",
		" * @param {{ok:String}} userName",
		" * @type fddfsdfsd",
		" * @description 777777777",
		"*/",
		"dsdfds",
		"76769+878",
		"/**",
		" * This function comment is parsed by doctrine",
		" * @param {{ok:String}} userName",
		" * @type fddfsdfsd",
		" * @description 777777777",
		"*/",
		"dsdfds",
		"76769+878"
	].join('\n'), { unwrap: true });



	function getProjectFiles(error, projectFiles){

		wrench.readdirRecursive("files", function(error, curFiles){
			for(var i in curFiles){
				var fileArr = curFiles[i].split(".");

				if(options.extensions.indexOf(fileArr[fileArr.length - 1]) !== -1){
					console.log(curFiles[i]);	
				}
				
			}
			//console.dir(curFiles);
		});	
	};

	var ast = esprima.parse("var a = {b:function(){},c:5}/*123*/", {
        comment: true
	});
	console.dir(ast.comments);
	getProjectFiles();

	
}(typeof exports === 'undefined' ? (gitty = {}) : exports));