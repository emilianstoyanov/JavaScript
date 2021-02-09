let array = [9, 1, 5, 12, 1];
array.sort((a, b) => b - a);
console.log(array)

let names = ['emo', 'ivan', 'pesho', 'ani'];
names.sort((a, b) => a.localeCompare(b));
console.log(names)


let str = 'pesho';
let res = str.slice(0, 3);
console.log(res)


let num = ['9', '1', '5', '12', '1'];
console.log(num.map(Number).map(x => x + 1))

// let numbers = [9, 1, 5, 12, 1];
// let result = numbers.reduce(sumReducer, 0);
//
// function sumReducer(acc, c) {
//     return acc + c;
// }
//
// console.log(sumReducer(numbers))


function test(input) {
    let result = input
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2);

    return result.reverse().join(' ');
}

console.log(test([10, 15, 20, 25]))