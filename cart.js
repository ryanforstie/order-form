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

// Form.all = [];

var nameGoesHere = JSON.parse(localStorage.storedUserInput);

function displayUserInput() {
document.getElementById('product').innerHTML = nameGoesHere[0].product;
document.getElementById('quantity').innerHTML = nameGoesHere[0].productQuantity;
document.getElementById('name').innerHTML = nameGoesHere[0].userName;
document.getElementById('street').innerHTML = nameGoesHere[0].userStreet;
document.getElementById('city').innerHTML = nameGoesHere[0].userCity;
ocument.getElementById('state').innerHTML = nameGoesHere[0].userState;
document.getElementById('zipcode').innerHTML = nameGoesHere[0].userZip;
document.getElementById('phonenumber').innerHTML = nameGoesHere[0].userPhoneNumber;
document.getElementById('creditcard').innerHTML = nameGoesHere[0].userCreditCard;

  // var inputArray = ['product', 'productQuantity', 'userName', 'userStreet', 'userCity', 'userState', 'userZip', 'userPhoneNumber', 'userCreditCard'];
  // for (var i = 0; i < inputArray.length; i++) {
    // var liEl = document.createElement('li');
    // liEl.textContent = nameGoesHere[0].product;
    // (userInputList).appendChild(liEl);
  }
// };

displayUserInput();

// if (localStorage.storedUserInput) {
//   Form.all = JSON.parse(localStorage.storedUserInput);
//   displayUserInput();
// } else {
//   console.log('FUCK MY LIFE');
// }
