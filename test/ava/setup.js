import jsdom from 'jsdom'

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>', { url: 'http://localhost' })
global.window = document.defaultView;
global.navigator = window.navigator;
global.getComputedStyle = window.getComputedStyle
window.navigator.app = {clearHistory: function() {}}
