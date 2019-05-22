// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let textInput = document.querySelector('#text-input');
let wordCount = document.querySelector('#word-count');
let characterCount = document.querySelector('#character-count');




textInput.addEventListener('keyup', function (event) {
  if (textInput.value.length < 1) return;
  
  if (textInput.value) {
    characterCount.innerHTML = textInput.value.length;
  }
});