function matchPhoneNumber(arr) {
    let text = arr[0];
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    // let pattern = /\+359([- ])2\1\d{3}\1\d{4}\b/g;
    let resultArr = [];
    let result = [];
    while ((resultArr = pattern.exec(text)) !== null) {
        result.push(resultArr[0])

    }


    console.log(result.join(", "));
}

matchPhoneNumber(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"])


// function matchPhoneNumber(input) {
//
//     let phones = input[0];
//     let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
//     let validPhones = phones.match(pattern);
//     console.log(validPhones.join(', '));
//
//
// }
//
//
// matchPhoneNumber([
//     '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
// ])