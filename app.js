const nameInp = document.querySelector(".card-name-inp");
const numInp = document.querySelector(".card-num-inp");
const monthInp = document.querySelector(".month-inp");
const yearInp = document.querySelector(".year-inp");
const cvvInp = document.querySelector(".cvv-inp");
const nameDisp = document.querySelector(".holder-name-disp");
const monthDisp = document.querySelector(".month-disp");
const yearDisp = document.querySelector(".year-disp");
const cvvDisp = document.querySelector(".cvv-disp");
const numDisp = document.querySelector(".card-numb-disp");

nameInp.value = "";
numInp.value = "";
monthInp.value = "";
yearInp.value = "";
cvvInp.value = "";

function submitCard() {
  nameDisp.textContent = nameInp.value;
  monthDisp.textContent = monthInp.value;
  yearDisp.textContent = yearInp.value;
  cvvDisp.textContent = cvvInp.value;

  let cardNumber = [];

  for (let i = 0; i < numInp.value.length; i++) {
    if (i === 3) {
      cardNumber[i] = numInp.value[i] + " ";
    } else if (i === 7) {
      cardNumber[i] = numInp.value[i] + " ";
    } else if (i === 11) {
      cardNumber[i] = numInp.value[i] + " ";
    } else {
      cardNumber[i] = numInp.value[i];
    }
  }
  numDisp.textContent = cardNumber.join("");
  nameInp.value = "";
  numInp.value = "";
  monthInp.value = "";
  yearInp.value = "";
  cvvInp.value = "";
}
