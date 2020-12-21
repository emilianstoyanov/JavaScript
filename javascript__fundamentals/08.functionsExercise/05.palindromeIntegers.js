function palindromeIntegers(input) {


    for (let i = 0; i < input.length; i++) {
        let num = String(input[i]);
        let rev = num.split("").reverse().join("");

        if (num === rev) {
            console.log(`true`);
        } else {
            console.log(`false`);
        }


    }


}

palindromeIntegers([123, 323, 421, 121])