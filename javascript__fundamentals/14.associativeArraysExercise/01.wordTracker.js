function wordsTracker(input) {
    let map = new Map();

    let searchWord = input.shift().split(' ');


    for (let s of searchWord) {
        map.set(s, 0);
    }

    for (let w of input) {
        if (searchWord.includes(w)) {
            let quantity = map.get(w);
            let newQuantity = quantity += 1;
            map.set(w, newQuantity);

        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let kv of sorted) {
        console.log(`${kv[0]} - ${kv[1]}`);
    }


}

wordsTracker([
        'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
        , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
)