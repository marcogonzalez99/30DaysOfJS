// Declaring a function
console.log("--- Declaring a Function ---")
function functionName () {
    console.log("called test")
}

functionName()

// Function with no parameter
console.log("--- With no Parameter ---")
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
}

square()

// Returning Values
console.log("--- Returning Values ---")
function fullName() {
    let first_name = 'Marco'
    let last_name = "Gonzalez"
    let space = " "
    let full_name = first_name + space + last_name
    return full_name
}

console.log(fullName())

// Function with a parameter
console.log("--- Function with a parameter ---")
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}

console.log(areaOfCircle(5))

// Function with two parameters
console.log("--- Function with two parameters ---")
function sumOfTwo(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
console.log(sumOfTwo(10,20))

// Function taking an array
console.log("--- Function taking an array ---")
function sumArrayValues(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}
const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(sumArrayValues(numbers))

// Unlimited parameters
console.log("--- Unlimited parameters ---")
function sumAll() {
    console.log(arguments)
}
sumAll(1,2,3,4)

function sumOfAll() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(sumOfAll(1,2,3,4))
console.log(sumOfAll(10,20,30,40))
console.log(sumOfAll(5,10,15))

// Unlimited parameters - Arrow
console.log("--- Unlimited parameters - Arrow ---")

const sumAllNums = (...args) => {
    console.log(args)
}

sumAllNums(1,2,3,4,5,6,7,8,9,0)

const doTheSum = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}

console.log(doTheSum(1,2))
console.log(doTheSum(5,10,100))

// Anonymous Function
console.log("--- Anonymous Function ---")
const anonymousFun = function() {
    console.log("I am an anonymous function and my value is stored in")
}

// Function Expression
console.log("--- Function Expression ---")
const square_expression = function(n) {
    return n * n
}
console.log(square(2))

// Self Invoking Function
console.log("--- Self Invoking Function ---")
(function(n) {
    console.log(n * n)
})(2)

// Arrow Function
console.log("--- Arrow Function ---")
const square_arrow = n => {
    return n * n
}
console.log(square_arrow(4))

const countries_arrow = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const changeToUpper = array => {
    const newArr = []
    for (const element of array) {
        newArr,push(element.toUpperCase())
    }
    return newArr
}
console.log(changeToUpper(countries_arrow))

// Arrow Function, Multiple Parameters
console.log("--- Arrow Function, Multiple Parameters ---")
const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(printFullName("Marco","Gonzalez"))

// Arrow Function, Return Statement
console.log("--- Arrow Function, Return Statement ---")
const printFullNameReturn = (firstName, lastName) => `${firstName} ${lastName}`
console.log(printFullNameReturn("Madi", "Gonzalez"))

// Default Parameters
console.log("--- Default Parameters ---")
function greeting(name = 'Marco') {
    let message = `${name}, welcome to 30 Days of JavaScript`
    return message
}

console.log(greeting())
console.log(greeting("Madi"))

function calculateAge(birthYear, currentYear = 2023) {
    let age = currentYear - birthYear
    return age
}
console.log("Age: ", calculateAge(1800))

// Default Parameters - Arrow
console.log("--- Default Parameters - Arrow ---")
const generateFullName = (first = 'Marco', last = 'Gonz') => {
    let space = ' '
    let fullName = first + space + last
    return fullName
}

console.log(generateFullName())
console.log(generateFullName('Madi','Gonz'))

// Exercise Part 1
console.log("----- Part 1 -----")
