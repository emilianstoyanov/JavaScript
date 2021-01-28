function wordsUppercase(input) {
    let string = input.toUpperCase();
    let myRe = /\W/g;
    let stringList = string.split(myRe);
    stringList = stringList.filter(w => w !== '');
    return stringList.join(', ');
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));