var { browser, element, by } = require('protractor');
var LoginPage = require('../pages/login-page');
var CustomerAccountPage = require('../pages/customer-account-page');
var CustomerPersonalAccountPage = require('../pages/customer-personal-account-page');

describe('Login page', () => {
  var loginPage = new LoginPage();
  var customerAccountPage = new CustomerAccountPage();
  var customerPersonalAccountPage = new CustomerPersonalAccountPage();

  beforeEach(() => {
    loginPage.loadLoginPageUrl();
  });

  it('should login successfully with a customer account', () => {
    loginPage.clickOnBankManagerLoginBtn();
    var customerName =
      customerAccountPage.getTheCustomerUserameFromDropdownList(2);
    customerAccountPage.selectTheCustomerUsernameFromDropdownList(2);
    customerAccountPage.clickOnLoginBtn();
    expect(customerPersonalAccountPage.getCustomerUsername()).toEqual(
      customerName
    );
  });
});
