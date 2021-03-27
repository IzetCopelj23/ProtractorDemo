protractor = require('./conf.js');
var config = protractor.config;

config.capabilities = {
  'browserName' : 'chrome'
};

exports.config = config;