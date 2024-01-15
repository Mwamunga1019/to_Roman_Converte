"use strict";

const inputNumber = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const outputEL = document.getElementById("output");

const toRomans = function (num) {
  const numeralValues = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let romanizedValue = "";

  const decKeyValues = Object.keys(numeralValues).map(Number).reverse();

  decKeyValues.forEach((element) => {
    while (element <= num) {
      romanizedValue += numeralValues[element];
      num -= element;
    }
  });

  return (outputEL.textContent = romanizedValue);
};
// console.log(toRomans(`${inputNumber.value}`));

const clickEvent = function () {
  const inputValue = inputNumber.value;
  if (inputValue === "") {
    outputEL.textContent = "Please enter a valid number";
  } else if (inputValue < 1) {
    outputEL.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputValue >= 4000) {
    outputEL.textContent = "Please enter a number less than or equal to 3999";
  } else {
    outputEL.textContent = `Romans: ${toRomans(inputValue)}`;
  }
};

convertButton.addEventListener("click", clickEvent);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    clickEvent();
  }
});
