var CustomerAccountPage = function () {
  this.getTheCustomerUserameFromDropdownList = function (option) {
    element(by.css(`option:nth-child(${option})`)).getText();
  };

  this.selectTheCustomerUsernameFromDropdownList = function (option) {
    element(by.css(`option:nth-child(${option})`)).click();
  };

  this.clickOnLoginBtn = function () {
    element(by.buttonText('Login')).click();
  };

  this.getPersonalAccoiuntUsername = function () {
    element(by.css('span:nth-child(1)'));
  };
};

module.exports = CustomerAccountPage;
