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

checkIfUsersHaveTheSameName(firstJohn, secondJohn); // true
checkIfUsersHaveTheSameName(firstJohn, adam); // false