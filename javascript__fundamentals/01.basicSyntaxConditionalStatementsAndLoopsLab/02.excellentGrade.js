function excellentGrade(...input) {
    let num = Number(input.shift());

    if (num >= 5.50) {
        console.log(`Excellent`)

    } else {
        console.log(`Not excellent`)
    }

}

excellentGrade(5.50)