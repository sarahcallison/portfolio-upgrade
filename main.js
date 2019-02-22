// Variables - containers that store values 

var myVariable // declared but not initialized - it has no value 
// also, don't use "var" anymore. ES6 teaches us about "let" and "const" 

let thisVariable // declared a variable with new ES6 syntax, let allows variable's content to change 
// = assignment operater, let this variable be assigned whatever is to the right of =

const ANSWER = 42
// type of variable that does not change, all caps is convention for constants
// 6 primitive data types - strings, numbers, booleans - learn more on MDN Data structures
// ASI means you don't have to use semicolons

// String

let string1 = "Hello World" // string literal

let string2 = new String("Hello World") // example of a constructor

// Numbers

let thisNum = 3.14159 

// Boolean

let thisBool = true // always true or false
// == vs. === use the second method
// 1 == "1" returns true; 1 === "1" returns false

// + operator when not doing math concatenates strings together
// 5 + "5" + 5 + "5" returns "5555"

// Array - any time [] it always means an array, like shelving unit for list of variables
// can store numbers, strings

const MINARRAY = [42]
// every item in an array - the position is represented by a number called an index
// MINARRAY[0] returns 42
//MINARRAY[1] = 55 will add 55 to the first spot

// Object - curly braces will always indicate a JS object, commas after each key:value pair
// put trailing comma after last key:value pair

let myCar = {
    make: "VW"
}

// make is a property. The key value pair: key is make, colon separates key from value

//can make objects that hold a value as an array ["vw", "chevy"]

//ES6 Classes
//class is not the cookie itself, but the cookie cutter - you are defining the shape of the cutter
//constructor is making new cookies with that class

//Add method to class
()=> anonymous fat arrow function
//methods called on instances - cookies, or the class
