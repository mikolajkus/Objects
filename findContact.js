// 13. Write the findContact function that returns a string representing the contact with a given name.
// If a contact with a given name does not exist, return undefined.

function addContact(object, name, phoneNumber) {
    return {
        John: {
            name: name,
            phoneNumber: phoneNumber
        }
    }
}

function findContact(object, name) {
    const contactInfo = object[name];
    if (contactInfo) {
        return `Name: ${contactInfo.name}, Phone: ${contactInfo.phoneNumber}`;
    }
}

const contactsObject = {};
const informationAboutJohn = addContact(contactsObject, 'John', '123 456 789');

const johnContactInfo = findContact(informationAboutJohn, 'John');
console.log(johnContactInfo); // "Name: John, Phone: 123 456 789"