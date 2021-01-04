function hardWord(array) {
    let newArray = array[0];
    let text = array[0].split('. ');
    let words = array[1];


    for (let row of text) {
        let spl = row.split(' ')
        for (let word of spl) {

            if (word.includes('_')) {
                for (let newWord of words) {

                    if (word.length === newWord.length) {
                        newArray = newArray.replace(word, newWord);
                        break;
                    }

                }


            }


        }


    }

    console.log(newArray)

}


hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened.' +
    ' My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers m' +
    'e even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)