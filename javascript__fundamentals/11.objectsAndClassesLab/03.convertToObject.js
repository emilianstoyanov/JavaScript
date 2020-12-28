function convertToObject(input) {
    let person = JSON.parse(input);

    console.log(person)


    let entries = Object.entries(person);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }


}


convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')


