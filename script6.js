// let exp = prompt('Enter an expression to calculate')
// console.log('You entered: ', exp);
function expResult(exp) {
    try {
        let res = eval(exp);
        console.log('Result: ', res);
    } catch (err) {
        console.log('Incorrect expression');
    }
}