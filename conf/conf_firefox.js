protractor = require('./conf.js');
var config = protractor.config;

config.capabilities = {
  'browserName': 'firefox'
};


exports.config = config;