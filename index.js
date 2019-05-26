// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Word Count</h1>`;

let textArea =  document.querySelector('[data-character-count]')
let words = document.querySelector('#word-count');
let characters = document.querySelector('#character-count');


//  1. Create varables and selectors for elements
//  2. Setup function whenever textarea changes 
//  3. Make sure the event happened on textarea using matches()
//  4. To get the word count. Create an array with each word from the textarea. Use split() method to turn a strin ginto an array based on some delimiter eg: space, comma, etc.

var inputHandler = function (event) {
  let wordCount = event.target.value.split(/[\n\r\s]+/g).filter(function(word){
    return word.length > 0;
  });

  if (!event.target.matches('[data-character-count]')) return;
    
   words.textContent = wordCount.length;
   characters.textContent = event.target.value.length;
}

document.addEventListener('input', inputHandler, false)




// textArea.addEventListener('input', function (event) {
//   if (!textArea > 1) return;

//   if (textArea.value) {
//     let wordCount 
//     characters.innerHTML = textArea.value.length;
//   }
// });