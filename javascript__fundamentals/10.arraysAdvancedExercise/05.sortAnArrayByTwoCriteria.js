function sortAnArrayByTwoCriteria(input) {

    let sorted = input.sort((b, a) => b.length - a.length || b.localeCompare(a));

    console.log(sorted.join('\n'));
}


sortAnArrayByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])