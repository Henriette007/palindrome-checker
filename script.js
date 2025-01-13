const input = document.getElementById('text-input');
const result = document.getElementById('result');
const checkBtn = document.getElementById('check-btn');

function palindrome(){

if (input.value === ''){
return alert("Please input a value");
}

const regex = /[^a-zA-Z0-9]/g;
const validInput = input.value.replace(regex, '');
const lowercasedValue = validInput.toLowerCase();
const reversedValue = lowercasedValue.split("").reverse().join("");

if (lowercasedValue === reversedValue){
  return result.innerHTML = `${input.value} is a palindrome`;
} else {
  return result.innerHTML = `${input.value} is not a palindrome`;
}

}

checkBtn.addEventListener("click", palindrome);

