let str = prompt('Please, enter string you want to check');

function palindrome(str) {
    let letters = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    let check = letters.split('').reverse().join('');

    if (letters === check) {
        console.log(true);
    }
    if (letters !== check) {
        console.log(false);
    }

}

palindrome(str)