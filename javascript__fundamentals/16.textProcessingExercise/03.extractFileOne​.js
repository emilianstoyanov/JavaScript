function extractFile(input) {

    let spl = input.split('\\');

    let lastElement = spl[spl.length - 1].split('.');

    console.log(`File name: ${lastElement[0]}`);
    console.log(`File extension: ${lastElement[1]}`);


}


extractFile('C:\\Internal\\training-internal\\Template.pptx')

extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')