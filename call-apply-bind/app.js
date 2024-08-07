/**
 * Say we have a method in inMyanmar object
 * and want to reuse it for other objects
 */
const inMyanmar = {
    country: 'Myanmar',
    ageLimit: 18,
    population: 50000000,
    isAdult(name, age) {
        console.log(`${name} is ${(age >= this.ageLimit ? '' : 'not ')}an adult in ${this.country}.`);
    }
}

inMyanmar.isAdult('john doe', 18);

/**
 * Incorrect Approach:
 * 'this' is pointing the Window object
 * because it is a simple function call.
 * 
 * and since Window object doesn't have
 * ageLimit and country, will result in undefined.
 */
const isAnAdult = inMyanmar.isAdult;
isAnAdult('john doe', 18);

const inJapan = {
    country: 'Japan',
    ageLimit: 20,
    population: 125800000,
}

/**
 * Approach 1:
 * Copy inMyanmar method to inJapan method
 */
inJapan.isAdult = inMyanmar.isAdult;
inJapan.isAdult('john doe', 18);

/**
 * Approach 2: 
 * call() method
 * the first parameter tells the object 'this' keyword should point to
 */
inMyanmar.isAdult.call(inJapan, 'john doe', 18);

/**
 * Approach 3:
 * apply() method
 * same as call() method but
 * accepts an array for the rest of arguments
 */
inMyanmar.isAdult.apply(inJapan, ['jane smith', 20]);

/**
 * Approach 4:
 * bind() method
 * bind() method returns a new function
 * where 'this' keyword is bound to the object passed in as argument.
 * in this case, 'this' is pointing to inJapan object
 */
const checkJapan = inMyanmar.isAdult.bind(inJapan);
checkJapan('jane smith', 19);


/**
 * Another problematic scenario
 */
inMyanmar.childBorn = function() {
    console.log(`${this.country}'s population = ${++this.population}`);
}

/**
 * This will result in an error.
 * Because for eventHandlers 'this' always points to the target element.
 */
document.querySelector('.myanmar').addEventListener('click', inMyanmar.childBorn);

/**
 * Approach 1:
 * bind() method
 * since bind() method returns a new function
 * with the 'this' keyword pointing to the passed argument,
 * it is perfect for this scenario where eventListener requires a callback function
 */
document.querySelector('.myanmar').addEventListener('click', inMyanmar.childBorn.bind(inMyanmar));