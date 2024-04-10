// 1. Write the checkIfPropertyIsDefined function, which checks if the value of the property isn't undefined.

const userName = {
    firstName: 'John',
    lastName: 'Smith',
    age: undefined
}

function checkIfPropertyIsDefined(object, key) {
    return object[key] !== undefined;
}

checkIfPropertyIsDefined(userName, 'firstName'); // true
checkIfPropertyIsDefined(userName, 'age'); // false
checkIfPropertyIsDefined(userName, 'height'); // false

// 2. Add up all salaries.

const salaries = {
    john: 50,
    adam: 100,
    katie: 75
}
const salarySum = salaries.john + salaries.adam + salaries.katie;

console.log(salarySum);

// 3. Write the isObject function. Use the typeof operator.

function isObject(valueType) {
    return typeof valueType === 'object' && valueType !== null;
}

console.log(isObject({})); // true
console.log(isObject(10)); // false
console.log(isObject(null)); // false

// 4. In the separate file.