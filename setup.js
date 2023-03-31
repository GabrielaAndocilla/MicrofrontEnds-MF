var fs = require('fs');
var resolve = require('path').resolve;
var join = require('path').join;
var cp = require('child_process');
var os = require('os');


var root = resolve(__dirname, '.');


var npmCmd = os.platform().startsWith('win') ? 'npm.cmd' : 'npm';

fs.readdirSync(root).forEach(function (subDir) {
  var subDirPath = join(root, subDir);

  if (!fs.existsSync(join(subDirPath, 'package.json'))) return;

  console.log('===================================================================');
  console.log(`Performing "npm ci" inside ${subDir} folder`);
  console.log('===================================================================');

  cp.spawnSync(npmCmd, ['ci'], { env: process.env, cwd: subDirPath, stdio: 'inherit' });
});


// backend

var backendPath = resolve(__dirname, './server');

cp.spawn(npmCmd, ['start'], { env: process.env, cwd: backendPath, stdio: 'inherit' });

// host-app

var hostAppPath = resolve(__dirname, './home');

cp.spawn(npmCmd, ['start'], { env: process.env, cwd: hostAppPath, stdio: 'inherit' });

// mf-characters

var mfProductsPath = resolve(__dirname, './listCharacters');

cp.spawn(npmCmd, ['start'], { env: process.env, cwd: mfProductsPath, stdio: 'inherit' });
