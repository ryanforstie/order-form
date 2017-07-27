'use strict';

var formSubmit = [];
var userInputList = document.getElementById('#');

var Form = function(product, productQuantity, userName, userAddress, userPhoneNumber, userCreditCard) {
  this.product = product;
  this.productQuantity = productQuantity;
  this.userName = userName;
  this.userAddress = userAddress;
  this.userPhoneNumber = userPhoneNumber;
  this.userCreditCard = userCreditCard;
};

function displayUserInput() {
  var inputArray = [product, productQuantity, userName, userAddress, userPhoneNumber, userCreditCard];
  for (var i = 0; i < inputArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = inputArray[i];
    (userInputList).appendChild(liEl)
  }
}
