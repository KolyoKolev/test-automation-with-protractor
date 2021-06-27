var LoginPage = function () {
  var loginPageUrl =
    'http://www.way2automation.com/angularjs-protractor/banking/#/login';

  var selectors = {
    selectCustomerLoginBtn: '[ng-click="customer()"]',
    selectBankManagerLoginBtn: '[ng-click="manager()"]',
  };

  this.loadLoginPageUrl = function () {
    browser.get(loginPageUrl);
    browser.manage().window().maximize();
  };

  this.clickOnBankManagerLoginBtn = function () {
    element(by.css(selectors.selectCustomerLoginBtn)).click();
  };
};

module.exports = LoginPage;
