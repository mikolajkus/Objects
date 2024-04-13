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

function findContact(contact, name) {
    const contactInfo = contact[name];
    if (contactInfo) {
        return `Name: ${contactInfo.name}}, Phone: ${contactInfo.phoneNumber}`;
    }
}

const contacts = {};
const contactsWithJohn = addContact(contacts, 'John', '123 456 789');

const johnContactInfo = findContact(contactsWithJohn, 'John');
console.log(johnContactInfo); // "Name: John, Phone: 123 456 789"