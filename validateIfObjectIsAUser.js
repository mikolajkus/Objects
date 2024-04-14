// 14. Create validateIfObjectIsAUser function
// that takes an object as an argument and returns true if the object meets the following requirements:
//  1. has firstName property with a value of a string type
//  2. has lastName property with a value of a string type
//  3. has age property with a value of a number type
//  4. has a greet property with a value of a function type and the function returns a string containing the user firstName and the user lastName

const userObject = {
    firstName: 'Bob',
    lastName: 'Ross',
    age: 40,
    greet() {
        return "Hi, I'm Bob Ross!";
    }
}
const objectExample = {
    firstName: 'Kate',
    lastName: 'Williams',
    age: 40,
    greet() {
        return "Hi, I'm Kate!";
    }
}
const car = {
    make: 'Ferrari',
    model: 'F40',
    greet() {
        return "<engine noise>";
    }
}

function validateIfObjectIsAUser(object) {
    if (
        typeof object.firstName === 'string' &&
        typeof object.lastName === 'string' &&
        typeof object.age === 'number' &&
        typeof object.greet === 'function'
    ) {
        const greeting = object.greet();
        if (typeof greeting === 'string' &&
            greeting.includes(object.firstName) &&
            greeting.includes(object.lastName)
        ) {
           return true;
        }
    }
    return false;
}

console.log(validateIfObjectIsAUser(userObject)); // true
console.log(validateIfObjectIsAUser(objectExample)); // false
console.log(validateIfObjectIsAUser(car)); // false