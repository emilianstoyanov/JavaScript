function removeOccurrences(word, text) {


    let result = text.replace(/[ice]/gi, '');
    console.log(result);


}


removeOccurrences('ice',
    'kicegiciceeb'
)