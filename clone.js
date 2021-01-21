// function takes object that we want to clone as an argument
function cloneObject(originalObject){
    // if original object is not really an object or if it is null
    // returns original object
    if (typeof originalObject !== 'object' || originalObject === null){
        return originalObject;
    }
    // creates empty object
    let clonedObject = {};
    // for...in loop is responsible for cloning all properties and values
    // by using cloneObject function inside itself to go deeper in the object structure
    for (let i in originalObject){
        clonedObject[i] = cloneObject(originalObject[i]);
    }
    // returns cloned object
    return clonedObject;
}