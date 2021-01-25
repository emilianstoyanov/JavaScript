function trainTheTrainers(input) {
    let numberJuries = Number(input.shift());
    let count = 0;
    let evaluation = 0;
    let totalEvaluation = 0;
    let numberOfPresentations = 0;
    let totalCount = 0
    let commandFinish = input.shift();
    while (commandFinish !== "Finish") {

        while (count < numberJuries){
            count++;
            let num = Number(input.shift());
            evaluation += num;
            totalEvaluation += num;


        }
        console.log(`${commandFinish} - ${(evaluation / numberJuries).toFixed(2)}.`);
        numberOfPresentations++;
        totalCount++;
        evaluation = 0;
        count = 0;
        commandFinish = input.shift();
    }
    console.log(`Student's final assessment is ${((totalEvaluation / numberJuries) / totalCount).toFixed(2)}.`);



}

trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])

