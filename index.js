let length = document.getElementById("range");
let selecedtRange = document.getElementById("selectedRange");
selectedRange.innerHTML = length.value;

function decideRange() {
    let selectedRange = document.getElementById("selectedRange");
    selectedRange.innerHTML = length.value;
}
function result() {
    var uppercase = document.getElementById("Uppercase").checked;
    var number = document.getElementById("number").checked;
    var character = document.getElementById("character").checked;
    var lowercase = true;
    var passwordLength = length.value;
    var charset = "";
  if (number) charset += "0123456789";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (character) charset += "!@#$%^&*()+{}";
   
  var password = "";
  for (let index = 0; index < length.value; index++) {
    var random = Math.floor(Math.random()*charset.length);
    password += charset.charAt(random)
  }
  console.log(password);
  result1.innerHTML = password ;

};

function copy() {
    var result1 = document.getElementById('result1');
    var range = document.createRange();
    range.selectNode(result1);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    var copyButton = document.getElementById('copy');
    copyButton.style.backgroundImage = "url(done.jpg)";
    setTimeout(function() {
      copyButton.style.backgroundImage = "";
    }, 500); // Reset copy button text after 1.5 seconds
  }
