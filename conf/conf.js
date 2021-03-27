// conf.js
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'reports/screenshots',
  filename: 'my-report.html'
});
exports.config = {
  framework: 'jasmine',
  directConnect: true,
  // Setup the report before any tests start
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
       resultsDir: 'allure-results'
    }));

    // User credentials
    var username = 'izet.copelj@edu.fit.ba';
    var password = 'izouser120993!';
    var homepage = 'https://cuddleclones.com/';

    // we need to disable waiting for angular for pages that dont user Angular
    browser.waitForAngularEnabled(false);

    // go to login page
    browser.driver.get('https://cuddleclones.com/my-account/');
    browser.driver.findElement(by.id('username')).sendKeys(username);
    browser.driver.findElement(by.id('password')).sendKeys(password);
    browser.driver.findElement(by.name('login')).click();
    browser.driver.get(homepage);

    // Login takes some time, so wait until it's done and then redirect to homepage
    return browser.driver.wait(function () {
      return browser.driver.getCurrentUrl().then(function () {
        return homepage;;
      });
    }, 10000);
  },

  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  specs: ['../tests/*spec.js']

}