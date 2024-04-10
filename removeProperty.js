// 4. Write the removeProperty function.
// It should return true  if there is a property with a given key to remove.
// Otherwise, it should return false.

const user = {
    name: 'John'
}

function removeProperty(object, key) {
    if (object[key]) {
        delete object[key];
        return true;
    }
    return false;
}

console.log(removeProperty(user, 'name')); // true
console.log(removeProperty(user, 'name')); // false
console.log(removeProperty(user, 'weight')); // false

console.log(user); // {}