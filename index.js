// With babel-cli installed, you get the 'babel' and 'babel-node' binaries in ./node_modules/.bin.
// You can see this used in the "scripts"=>"demo" section of the package.json. 
var http = require('http');

// We also installed babel-preset-env and specified we wanted to use it in the .babelrc.
// As of June 2017, this gives us Javascript features from es2015, es2016, es2017, and latest. 
import path from 'path';

async function doAThing() {
  async function weCanAwaitThis() {}
  await weCanAwaitThis();
  return;
}
Promise.resolve(doAThing());

