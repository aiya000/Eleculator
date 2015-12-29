// TODO: detect errors

var execSync = require('child_process').execSync;

function execCmd(cmd) {
	console.log('run>> ' + cmd);
	execSync(cmd, function (err, stdout, stderr) {
		if (err !== null) {
			console.log('error(' + cmd + '): ' + err);
			console.log(stderr);
			//return false;
		}
		console.log(stdout);
		console.log();
		//return true;
	});
}

console.log('Please wait...\n');
// Ignore warnings
//var npmSucceed = execCmd('npm install');
//if (!npmSucceed) {
//	console.log("'npm install' is failure..");
//	return;
//}
//var tsdSucceed = execCmd('tsd install');
//if (!tsdSucceed) {
//	console.log("'tsd install' is failure..");
//	return;
//}
//var gruntSucceed = execCmd('./node_modules/grunt-cli/bin/grunt');
//if (!gruntSucceed) {
//	console.log("'./node_modules/grunt-cli/bin/grunt' is failure..");
//	return;
//}

execCmd('npm install');
execCmd('tsd install');
execCmd('./node_modules/grunt-cli/bin/grunt');

// finished :)
console.log('succeed building !');
