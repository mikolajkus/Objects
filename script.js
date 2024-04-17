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

function isObject(data) {
    return typeof data === 'object' && data !== null;
}

console.log(isObject({})); // true
console.log(isObject(10)); // false
console.log(isObject(null)); // false

// 4. In the separate file.

// 5. In the separate file.

// 6. Write the getVoteCount function.

function getVoteCount(votes) {
    return votes.upvotes - votes.downvotes;
}

console.log(getVoteCount({ upvotes: 10, downvotes: 5 })); // 5
console.log(getVoteCount({ upvotes: 75, downvotes: 90 })); // -15
console.log(getVoteCount({ upvotes: 50, downvotes: 50 })); // 0

// 7. Write the getCubeVolume function.

function getCubeVolume(cubeDimensions) {
    return cubeDimensions.width * cubeDimensions.length * cubeDimensions.height;
}

console.log(getCubeVolume({ width: 10, length: 5, height: 2 })); // 100
console.log(getCubeVolume({ width: 100, length: 500, height: 0 })); // 0
console.log(getCubeVolume({ width: 15, length: 2, height: 5 })); // 150

// 8. Write the getCityInformation function, use template literals.

function getCityInformation(cityInformation) {
    return `${cityInformation.name} is in ${cityInformation.country} and has an area of ${cityInformation.areaInKilometers} square kilometers`;
}

console.log(getCityInformation({
    name: 'Warsaw',
    country: 'Poland',
    areaInKilometers: 517
})); // Warsaw is in Poland and has an area of 517 square kilometers

// 9. Write the getUserCopy function. Assume that users only have the firstName and lastName.

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

function getUserCopy(user) {
    return {
        firstName: user.firstName,
        lastName: user.lastName
    };
}

const newUser = getUserCopy(john);
console.log(newUser.firstName); // John
console.log(newUser.lastName); // Smith
console.log(newUser === john); // false <-- this is crucial

// 10. Give you a function animal.
// Return a string like this:
// "This white dog has 4 legs."

const animal = {
    name: 'dog',
    legs: 4,
    color: 'white'
}

function getAnimalInformation(animal){
    return `This ${animal.color} ${animal.name} has ${animal.legs} legs.`
}

console.log(getAnimalInformation(animal));

// 11. While making a zork-type game, you create an object of rooms.
// Unfortunately, the game is not working. Find all the errors in the rooms object to get your game working again.

const rooms = {
    first: {
        description: 'This is the first room',
        items: {
            chair: 'The old chair looks comfortable',
            lamp: 'This lamp looks ancient'
        }
    },
    second: {
        description: 'This is the second room',
        items: {
            couch: 'This couch looks like it would hurt your back',
            table: 'On the table there is an unopened bottle of water'
        }
    }
}

console.log(rooms);

// 12. Write the addContact function that returns a new contacts object with an additional property.
// The new property should contain an object with the name  and phoneNumber  properties.
// Make sure not to modify the contacts provided as an argument to the addContact function.

function addContact(contactToPerson, contactName, phoneNumber) {
    return {
        ...contactToPerson,
        [contactName]: {
            name: contactName,
            phoneNumber: phoneNumber,
        }
    }
}

const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');
const contactsWithJohnAndKate =  addContact(contactsWithJohn, 'Kate', '321 654 987');

console.log(contactsWithJohn.John.name); // "John"
console.log(contactsWithJohn.John.phoneNumber); // '123 456 789'

console.log(contactsWithJohnAndKate);

console.log(contacts === contactsWithJohn); // false
console.log(contacts.John); // undefined

// 13. In the separate file.

// 14. In the separate file.