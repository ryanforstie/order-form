'use strict';

var userInputList = document.getElementById('#');

var Form = function(product, productQuantity, userName, userAddress, userPhoneNumber, userCreditCard) {
  this.product = product;
  this.source = './img/' + this.product + '.jpg';
  this.productQuantity = productQuantity;
  this.userName = userName;
  this.userAddress = userAddress;
  this.userPhoneNumber = userPhoneNumber;
  this.userCreditCard = userCreditCard;
};

var Form.all = [];

function handleFormSubmit(e) {
  var product = event.target.products.value;
  var productQuantity = event.target.name.value;
  var userName = event.target.name.value;
  var userAddress = event.target.name.value;
  var userPhoneNumber = event.target.name.value;
  var userCreditCard = event.target.name.value;

  var submitUserForm = new Form(product, productQuantity, userName, userAddress, userPhoneNumber, userCreditCard);

  formSubmit.push(submitUserForm);
  localStorage.storedUserInput = JSON.stringify(Form.all);
  displayUserInput();
}

function displayUserInput() {

  var inputArray = [product, productQuantity, userName, userAddress, userPhoneNumber, userCreditCard];
  for (var i = 0; i < inputArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = inputArray[i];
    (userInputList).appendChild(liEl)
  }
}

if (localStorage.storedUserInput) {
  Form.all = JSON.parse(localStorage.storedUserInput);
} else {
  console.log('FUCK MY LIFE');
}
