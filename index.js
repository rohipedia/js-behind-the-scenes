/**Introduction */
/**a = 100;
console.log(a);
var a;
console.log(a);
incrementBy(100);
console.log(b);
var b;
function incrementBy(value) {
    console.log(a + value);
}
 */


/**Execution Context */
/**Variable Object */
/** 
var customer = 'Maddy';

function first() {
    var greet = 'Hello ';
    second();
    console.log(greet + customer);
}

function second() {
    var wish = 'Hi ';
    third();
    console.log(wish + customer);
}

function third() {
    var say = 'Hey ';
    console.log(say + customer);
}

//first();

// declare fourth(); as a function expression


var age = 25;

console.log(age);

function fourth() {
    console.log(age);
    var age = 30;
    console.log(age);
}

fourth(); 
*/

/**Scoping and scoping chain */
/**Global execution context */
/*
var a = 100;
first();

function first() {
    var b = 200;
    second();

    function second() {
        var c = 300;
        third();
        console.log(a + b + c);
        //fifth();
    }
}

function third() {
    var d = 400;
    console.log(d);
    function fifth() {
        console.log(d);
    }
}
*/

/**The 'this' keyword */
//console.log(this);

first();

function first() {
    var a = 100;
    console.log(this);
    second();
    function second() {
        console.log(this);
    }
}

var customer = {
    name: 'Maddy',
    lineNumber: 1,
    isSelected: true,
    setIsSelected: function() {
        console.log(this.lineNumber);
    }
}

customer.setIsSelected();