import hook from 'css-modules-require-hook'

hook({
  extensions: [ '.scss', '.css' ],
  generateScopedName: '[local]___[hash:base64:5]'
})

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
  appVersion: 'test'
};

global.expect = require('chai').expect
global.should = require('chai').should()
global.simple = require('simple-mock')
require("babel-polyfill");
