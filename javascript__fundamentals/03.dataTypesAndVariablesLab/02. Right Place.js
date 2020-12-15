function rightPlace(firstStr, char, secondStr) {
    // let spl = firstStr.split("_")


    let res = firstStr.replace("_", char);
    let output = res === secondStr ? "Matched" : "Not Matched"

    console.log(output)


    // let concatenation = spl[0] + char + spl[1]
    //
    // if (concatenation === secondStr) {
    //     console.log(`Matched`);
    // } else {
    //     console.log(`Not Matched`);
    //
    // }


}

rightPlace('Str_ng', 'i', 'String')