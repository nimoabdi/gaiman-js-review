console.log('Im in script.js')

let myName = 'Nimo';
console.log('my name is Nimo');
// console.log('my name is ',' 'Nimo');

let myLastName = 'Abdi';
console.log('my last name is', myLastName);
/**
* Expresssions
* 
*/
function add (n1, n2) {
    return n1 + n2;
}
let result = add(6, 10);
//let result = 16;
let isSomethingTrue = 'Nimo'


if (8>7) {
    // if (false) {.....}
}
// NaN = not a number


//conditionals 

let age = '23'
if (age >56 ) {
    console.log('you are young');
}
else if (age <56) {
    console.log('you are old');
}

// functions

function sayHello(name) {
    console.log(`Hello ${name}`);
}

// declaring function
function makeASentence(words) {
    return words.join(' ') + '.';
}


// calling function
makeASentence(['Welcome', 'to', 'Gaiman']);
// anonymous function
let makeASentence2 = function(words) {
    return words.join(' ') + '.';
}
//arrow function
let makeASentence3 = (words) => {
    return words.join(' ') + '.';
}
// one liner
let makeASentence4 = words =>  words.join(' ') + '.';

// log is a method of the console object
console.log('yolo');

let numbers = [1, 2, 3, 4, 5];
//push() is a method of the numbers array
numbers.push(6);

// arrays

let animals = ['cat', 'dog', 'bunny'];

animals.push('newt', 'lion', 'flamingo');

let firstAnimal = animals[0]; // 'cat'
//let lastAnimal = animals[2];  // 'bunny'
let lastAnimal = animals[animals.length -1]; /// 'bunny'
//animals.length - 1= 2
// animals[2];  //'bunny'

for (let animal of animals) {
    // animals = 'cat';
    console.log('animals is', animal);
    if (animal === 'bunny') {
        console.log('bunny bunny bunny');
    }
}

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

for ( let i =0; i < 1000; i +=5) {
    console.log(i)
}

let bigNumber = 2**20;
while (bigNumber > 1) {
    bigNumber = bigNumber / 2;
    console.log(bigNumber);
}