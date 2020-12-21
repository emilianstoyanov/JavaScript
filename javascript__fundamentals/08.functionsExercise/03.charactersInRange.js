function charactersInRange(firstChar, secondChar) {
    let charOne = firstChar.charCodeAt(0);
    let charTwo = secondChar.charCodeAt(0);


    let save = "";

    if (charOne < charTwo) {
        for (let i = charOne + 1; i < charTwo; i++) {
            save += String.fromCharCode(i) + " ";
        }

    } else {
        for (let i = charTwo + 1; i < charOne; i++) {
            save += String.fromCharCode(i) + " ";

        }
    }


    console.log(save);

}

charactersInRange("C", "#")