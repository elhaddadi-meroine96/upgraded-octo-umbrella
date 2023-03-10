const form = document.querySelector("form");

const cardNumber = document.getElementById('numbers');
const numberInput = document.getElementById('cardNumber');

const nameInput = document.getElementById("cardName");
const cardName = document.getElementById("name");

const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");

const monthInput = document.getElementById("mm");
const yearInput = document.getElementById("yy");

const cardCvc = document.getElementById("cvc");
const cvcInput = document.getElementById("cardCvc");

const submitBtn = document.getElementById('submit_button');
const completed = document.querySelector(".thank");

const flexGroup = document.getElementById("flexGroup");
console.log(flexGroup);
/* init card values  */

const initValueName = cardName.innerText;
const initValueMM = cardMonth.innerText;
const initValueYY = cardYear.innerText;
const initValueNumbers = cardNumber.innerText;
const initValueCvc = cardCvc.innerText;

/** init input values */

document.getElementById("cardName").value = '';
document.getElementById("cardNumber").value = '';
document.getElementById("mm").value = '';
document.getElementById("yy").value = '';
document.getElementById("cardCvc").value = '';



function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
  
  if(cardNumber.innerText.match(/[a-zA-Z]/)) {
    console.log('letter');

  }
  if(cardNumber.innerText == '') {
    cardNumber.innerText = initValueNumbers;
  }
}

function setCardName(e) {
  cardName.innerText = format(e.target.value);
  if(cardName.innerText == '') {
    cardName.innerText = initValueName;
  }
  }

function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
  if(cardMonth.innerText == '') {
    cardMonth.innerText = initValueMM;
  }
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
  if(cardYear.innerText == '') {
    cardYear.innerText = initValueYY;
  }
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
  if(cardCvc.innerText == '') {
    cardCvc.innerText = initValueCvc;
  }
}

function containsOnlyNumbers(e) {
  return /^\d+$/.test(e);
}

function handleSubmit(e) {
  e.preventDefault();
  if (!nameInput.value) {
    nameInput.classList.add('error')
    nameInput.parentElement.classList.add("error_message");
  } else {
    nameInput.classList.remove("error");
    nameInput.parentElement.classList.remove("error_message");
  }
  if (!monthInput.value) {
    monthInput.classList.add("error")
    flexGroup.classList.remove("flex-group")
    monthInput.parentElement.classList.add("error_message");
  } else {
    monthInput.classList.remove("error");
    monthInput.parentElement.classList.remove("error_message");
  }

  if(containsOnlyNumbers(monthInput.value)) {
    monthInput.parentElement.classList.remove("error_message-numbersOnly");

  } else {
    monthInput.parentElement.classList.remove("error_message");
    monthInput.parentElement.classList.add("error_message-numbersOnly");
  }


  if (!yearInput.value) {
    yearInput.classList.add("error")
  } else {
    yearInput.classList.remove("error");
  }

  if(containsOnlyNumbers(yearInput.value)) {
    yearInput.parentElement.classList.remove("error_message-numbersOnly");

  } else {
    yearInput.parentElement.classList.remove("error_message");
    yearInput.parentElement.classList.add("error_message-numbersOnly");
  }
  

  if (!numberInput.value ) {
    numberInput.classList.add('error')
    numberInput.parentElement.classList.add("error_message");
    numberInput.parentElement.classList.remove("error_message-numbersOnly");

  }  else {
    numberInput.classList.remove("error");
    numberInput.parentElement.classList.remove("error_message");
    numberInput.parentElement.classList.remove("error_message-numbersOnly");

  }
  if(containsOnlyNumbers(numberInput.value)) {
    numberInput.parentElement.classList.remove("error_message-numbersOnly");

  } else if(numberInput.value) {
    numberInput.parentElement.classList.remove("error_message");
    numberInput.parentElement.classList.add("error_message-numbersOnly");
  }

  if (!cvcInput.value) {
    cvcInput.classList.add("error")
    cvcInput.parentElement.classList.add("error_message");
  } else {
    cvcInput.classList.remove("error");
    cvcInput.parentElement.classList.remove("error_message");
  }
  if(containsOnlyNumbers(cvcInput.value)) {
    cvcInput.parentElement.classList.remove("error_message-numbersOnly");

  } else {
    cvcInput.parentElement.classList.remove("error_message");
    cvcInput.parentElement.classList.add("error_message-numbersOnly");
  }
  if (
    nameInput.value &&
    numberInput.value &&
    monthInput.value &&
    yearInput.value &&
    cvcInput.value &&
    numberInput.value.length == 16
  ) {
    completed.classList.remove("visually-hidden");
    form.classList.add("visually-hidden");
  }

}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

numberInput.addEventListener("keyup", setCardNumber);
submitBtn.addEventListener("click", handleSubmit);
numberInput.addEventListener("keyup", setCardNumber);
nameInput.addEventListener("keyup", setCardName);
monthInput.addEventListener("keyup", setCardMonth);
yearInput.addEventListener("keyup", setCardYear);
cvcInput.addEventListener("keyup", setCardCvc);
