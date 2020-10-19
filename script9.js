let num = prompt('Enter your number')
let str = '';
let catDigit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let beforeTWenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let catDecade = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

num = num.padStart(6, '0');

    function one_digit(n) {
        if (parseFloat(n) < 10) {
            for (let i = 0; i < catDigit.length; i++) {
                if (n === i) {
                    str += catDigit[i] + ' ';
                }
            }
        }
        return str;
    }

    function one_word(n) {
        if ((parseFloat(n) > 10) && (parseFloat(n) < 20)) {
            for (let i = 0; i < beforeTWenty.length; i++) {
                if (n === (i + 10)) {
                    str += beforeTWenty[i] + ' ';
                }
            }
        }
        return str;
    }

    function two_digit(n) {
        for (let i = 0; i < catDecade.length; i++) {
            if (parseFloat(n) === i) {
                str += catDecade[i] + ' ';
                str += catDigit[i] + ' ';
            }
        }
        return str;
    }

    function three_digit(dig, dec, hun) {
        dig = 5,
            dec = 4,
            hun = 3;
        if (num[hun] != 0) {
            one_digit(num[hun]);
            str += 'hundred ';
        }
        if ((num[dec] + num[dig]) < 10) {
            one_digit(num[dec] + num[dig]);
        }
        if (((num[dec] + num[dig]) > 10) && ((num[dec] + num[dig]) < 20)) {
            one_word(num[dec] + num[dig]);
        }
        if ((num[dec] + num[dig]) >= 20) {
            two_digit(num[dec]);
            one_digit(num[dig]);
        }
        return str;
    }

    function four_digit(num) {
        if (num[2] != 0 || num[1] != 0 || num[0] != 0) {
            three_digit(0, 1, 2);
            str += 'thousand ';
        }

        three_digit();
        return str;
    }

    function mln(num){
    if (num == 1000000) {
        str += 'one million';
    }
    return str;
}
function transformation(num) {
    if (+num <10){
        one_digit(num)
    }
    else if ((+num>10)&&(+num<20)){
        one_word(num)
    }
    else if ((+num>19)&&(+num<100)){
        two_digit(num)
    }
    else if ((+num>99)&&(+num<1000)){
        three_digit();
    } 
    else if ((+num>999)&&(+num<1000000)){
        four_digit(num)
    }
    else {
        mln(num)
    }
}

console.log(transformation(num));