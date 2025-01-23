const checkBtn = document.getElementById("check-btn");
const regex = /[!@#$%^&*.,(){}_-\s]/gi; //find Not digit characters

function checkPalindrome() {
  const inputTxt = document.getElementById("text-input").value
  const result = document.getElementById("result");

  if(!inputTxt){
    alert("Please input a value");
  }else{
    const word = inputTxt.replace(regex,"").toLowerCase()
    let wordBckWords = word.split("").reverse().join("");
    let message = word === wordBckWords ? `${inputTxt} is a Palindrome.`: `${inputTxt} is not a Palindrome.`;

    result.innerText = message;
  }

}