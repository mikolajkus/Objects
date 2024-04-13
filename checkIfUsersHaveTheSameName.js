// 5. Write the checkIfUsersHaveTheSameName function.

const firstJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const secondJohn = {
    firstName: 'John',
    lastName: 'Smith'
}

const adam = {
    firstName: 'Adam',
    lastName: 'Johnson'
}

function checkIfUsersHaveTheSameName(firstObject, secondObject) {
    if (
        (firstObject.firstName !== secondObject.firstName) ||
        (firstObject.lastName !== secondObject.lastName)
    ) {
        return false;
    }
    return true;

}

console.log(checkIfUsersHaveTheSameName(firstJohn, secondJohn)); // true
console.log(checkIfUsersHaveTheSameName(firstJohn, adam)); // false