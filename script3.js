// let text = prompt('Please, enter your text');
//     phrase = prompt('Please, enter a phrase you want to change');
//     newPhrase = prompt('Please, enter a new phrase')

// console.log('Your text: ' , text)
// console.log('Your phrase: ' , phrase)
// console.log('Your new phrase: ' , newPhrase)


function symChanging(sym, newSym, str) {
    while( str.indexOf(sym) > -1) {
      str = str.replace(sym, newSym);
    }
    return str;
}



console.log('Your updated text:',symChanging(phrase, newPhrase, text));
