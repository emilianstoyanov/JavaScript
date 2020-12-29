function employees(input) {

    const employees = [];
    input.forEach(name => {
        employees.push({
            name,
            personalNumber: name.length
        })
    });

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }


}

employees([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
)


// function employees(input) {
//
//     const employees = {};
//     input.forEach(name => {
//         employees[name] = name.length;
//
//     })
//
//     for (const name in employees) {
//         console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
//     }
//
//
// }
//
// employees([
//         'Silas Butler',
//         'Adnaan Buckley',
//         'Juan Peterson',
//         'Brendan Villarreal'
//     ]
// )