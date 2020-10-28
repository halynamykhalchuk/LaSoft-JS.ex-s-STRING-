function statistics(str) {
    let strLen = str.length;
    strUp = str.match(/[A-Z]/g).length;
    strLow = str.match(/[a-z]/g).length;
    strDgt = str.match(/[0-9]/g).length;
    strPunct = str.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g).length;
    strSpc = 0;
    console.log('Your string: ', str)
    for (let i = 0; i < strLen; i++) {
        if (str[i] === ' ')
            strSpc++

    }
    console.log('Number of Symbols: ', strLen);
    console.log('Number of Letters: ', strUp + strLow);
    console.log('Number of Uppercase: ', strUp);
    console.log('Number of Lowercase: ', strLow);
    console.log('Number of Digits: ', strDgt);
    console.log('Number of Punctuation: ', strPunct);
    console.log('Number of Spaces: ', strSpc);
}