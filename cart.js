var userInputList = document.getElementById('cart');

function Form(product, productQuantity, userName, userStreet, userCity, userState, userZip, userPhoneNumber, userCreditCard) {
  this.product = product;
  this.source = this.product + '.jpg';
  this.productQuantity = productQuantity;
  this.userName = userName;
  this.userStreet = userStreet;
  this.userCity = userCity;
  this.userState = userState;
  this.userZip = userZip;
  this.userPhoneNumber = userPhoneNumber;
  this.userCreditCard = userCreditCard;
};

var nameGoesHere = JSON.parse(localStorage.storedUserInput);

function displayUserInput() {
document.getElementById('products').innerHTML = nameGoesHere[0].product;
document.getElementById('quantity').innerHTML = nameGoesHere[0].productQuantity;
document.getElementById('name').innerHTML = nameGoesHere[0].userName;
document.getElementById('street').innerHTML = nameGoesHere[0].userStreet;
document.getElementById('city').innerHTML = nameGoesHere[0].userCity;
document.getElementById('state').innerHTML = nameGoesHere[0].userState;
document.getElementById('zipcode').innerHTML = nameGoesHere[0].userZip;
document.getElementById('phonenumber').innerHTML = nameGoesHere[0].userPhoneNumber;
document.getElementById('creditcard').innerHTML = nameGoesHere[0].userCreditCard;
var imageContainer = document.getElementById('image');
imageContainer.src = nameGoesHere[0].source;
}
function clearLocalStorage() {
  localStorage.clear();
}

displayUserInput();

var formSubmit = document.getElementById('store-form');

formSubmit.addEventListener('submit', clearLocalStorage);
