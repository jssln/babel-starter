// @flow

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

// After adding babel-preset-flow, we can declare Flow types and have them stripped out by Babel.
type SampleType = { sampleField: number };
const aThing: SampleType = { sampleField: 1 };

// After adding babel-preset-react, we can write JSX, and Babel will transform it into
// `React.createElement` calls.
// Note, this means we need to install React separately. (react and react-dom)
import React from 'react';
const aDiv = (
  <div>
    <h1>Hello world!</h1>
  </div>
);

// In the browser:
/*
import ReactDOM from 'react-dom';
ReactDOM.render(aDiv, document.getElementById('root'));
*/

// Flow example. If you uncomment the following line and run `yarn run flow`, you will see an error.
// const a: number = 'notANumber';
