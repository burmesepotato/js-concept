/**
 * A Closure is a JavaScript feature that happens automatically.
 * 
 * Definition 1:
 * A closure gives a function access to all the variables of 
 * its parent function, even after that parent function has returned.
 * 
 * Definition 2:
 * A closure makes sure that a function doesn't lose connection
 * to variables that existed at the function's birth place.
 * 
 * Definition 3:
 * A closure is like a backpack that a function carries around
 * wherever it goes.
 * This backpack has all the variables that were available
 * in the environment where the function was created.
 * 
 */

const person = function() {
    let savings = 100;
    
    return function(income) {
        savings += income;
        console.log(`It's payday! Savings = ${savings}`);
    }
}

const getSalary = person();
getSalary(100);
getSalary(100);


/**
 * Another thing to note is that
 * the variables from closure hold higher precedence
 * than those from global scope.
 */

let items = ['apple', 'banana'];

const shoppingCart = () => {
    let items = [];

    return (newItem) => {
        items.push(newItem);
        console.table(items);
    }
}

const addToCart = shoppingCart();
addToCart('milk');


/**
 * Another scenario:
 * on g() and h() function call, notice how f() variable backpack is updated.
 */
let f;

const g = () => {
    f = () => {
        console.log(`Hello from ${g.name}`);
    }
}

const h = () => {
    f = () => {
        console.log(`Hello from ${h.name}`);
    }
}

g();
f();

h();
f();