var CustomerPersonalAccountPage = function () {
  this.getCustomerUsername = function () {
    element(by.css('span:nth-child(1)')).getText();
  };
};

module.exports = CustomerPersonalAccountPage;
