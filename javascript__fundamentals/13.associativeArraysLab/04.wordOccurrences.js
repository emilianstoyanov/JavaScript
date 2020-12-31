function wordOccurrences(input) {
    let map = new Map();

    for (let word of input) {

        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            let currQuantity = map.get(word);
            let newQuantity = currQuantity += 1;
            map.set(word, newQuantity);
        }


    }
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let kv of sorted) {
        console.log(`${kv[0]} -> ${kv[1]} times`);
    }

}

wordOccurrences(["Here", "is", "the", "first",
    "sentence", "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"])