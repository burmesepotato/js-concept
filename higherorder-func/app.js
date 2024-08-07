/**
 * Function that accepts functions as callback
 * or function that returns a function
 * is called a higher-order function
 * because they leave the detail work to other functions
 */


/**
 * Example 1:
 * here addEventListener is a higer-order function.
 * it accepts another function as a callback
 * to do the detail work
 */
document.body.addEventListener('click', () => {
    console.log('A user has clicked');
})


/**
 * Example 2:
 * here greetHey is a higher-order function.
 * it returns a function that accepts 'name' as argument
 * that does the detail work
 */
const greetHey = (greeting) => (name) => console.log(`${greeting}, ${name}!`);

const greet = greetHey('Hi');

greet('Everyone');
greetHey('Sup')('yall');