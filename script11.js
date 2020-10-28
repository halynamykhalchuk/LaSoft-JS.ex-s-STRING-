// let text = prompt('Please, enter your string');
//     word = prompt('Please, enter a word');

// console.log('Your text: ' , text)
// console.log('Your word: ' , word)

function counting(text, word) {
  let res = 0;
      i = 0;
  while((i = text.indexOf(word)) >= 0) {
      text= text.substring(i + word.length);  
      res++;
  }
  return res;
}
// console.log('Result: ', counting(text, word));