// 13. Write the findContact function that returns a string representing the contact with a given name.
// If a contact with a given name does not exist, return undefined.

function addContact(contactToPerson, name, phoneNumber) {
    return {
        ...contactToPerson,
        [name]: {
            name: name,
            phoneNumber: phoneNumber
        }
    }
}

function findContact(contactToPerson, name) {
    const informationAboutPerson = contactToPerson[name];
    return `Name: ${informationAboutPerson.name}, Phone: ${informationAboutPerson.phoneNumber}`;
}

const contactsObject = {};
const informationAboutJohn = addContact(contactsObject, 'John', '123 456 789');

const johnContactInfo = findContact(informationAboutJohn, 'John');
console.log(johnContactInfo); // "Name: John, Phone: 123 456 789"