/* JavaScript Starter Code */

let numbers = document.getElementById('initialNumbers');
let result = document.getElementById('permutedNumbers');
let btn = document.getElementById('btnPermute');
let resultDiv = document.getElementById('resultDiv');
let numArray = [];

function randomPermuteMe(numArray) {
  // ToDo
 return Math.floor(Math.random() * numArray);

}
result = randomPermuteMe(45);
// comsole.log(randomPermuteMe(45));
// Expected output: 0 to 45

window.onload = function() {
  // ToDo

}
btn.onclick = function() {
  // ToDo
  console.log(result);


}