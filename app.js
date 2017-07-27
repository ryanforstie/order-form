'use strict';

var userInputList = document.getElementById('cart');

function Form(product, productQuantity, userName, userStreet, userCity, userState, userZip, userPhoneNumber, userCreditCard) {
  this.product = product;
  this.source = './img/' + this.product + '.jpg';
  this.productQuantity = productQuantity;
  this.userName = userName;
  this.userStreet = userStreet;
  this.userCity = userCity;
  this.userState = userState;
  this.userZip = userZip;
  this.userPhoneNumber = userPhoneNumber;
  this.userCreditCard = userCreditCard;
};

Form.all = [];

function handleFormSubmit(e) {

  var product = event.target.products.value;
  var productQuantity = event.target.quantity.value;
  var userName = event.target.name.value;
  var userStreet = event.target.street.value;
  var userCity = event.target.city.value;
  var userState = event.target.state.value;
  var userZip = event.target.zipcode.value;
  var userPhoneNumber = event.target.phonenumber.value;
  var userCreditCard = event.target.creditcard.value;

  var submitUserForm = new Form(product, productQuantity, userName, userStreet, userCity, userState, userZip, userPhoneNumber, userCreditCard);

  Form.all.push(submitUserForm);
  localStorage.storedUserInput = JSON.stringify(Form.all);
  displayUserInput();
}

function displayUserInput() {

  var inputArray = [product, productQuantity, userName, userStreet, userCity, userState, userZip, userPhoneNumber, userCreditCard];
  for (var i = 0; i < inputArray.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = inputArray[i];
    (userInputList).appendChild(liEl);
  }
};

var formSubmit = document.getElementById('store-form');

formSubmit.addEventListener('submit', handleFormSubmit);

if (localStorage.storedUserInput) {
  Form.all = JSON.parse(localStorage.storedUserInput);
} else {
  console.log('FUCK MY LIFE');
}
