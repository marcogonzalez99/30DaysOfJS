// // Switch Case
// let weather = 'cloudy'
// switch(weather) {
//     case 'rainy':
//         console.log("You will need a rain coat")
//         break
//     case 'cloudy' :
//         console.log('You will need a jacket')
//         break
//     case 'sunny':
//         console.log("You Won't need anything")
//         break
// }

// // Switch with user input
// let dayUser = prompt('What day is it')
// let day = dayUser.toLowerCase()

// switch(day) {
//     case 'monday' :
//         console.log('It is Monday')
//         break
//     case 'friday' :
//         console.log('It is Friday')
//         break
//     default:
//         console.log("It's another day")
//         break
// }

// // This can also be done using the < > == signs

// // Ternary Operators
// let isRaining = true
// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.')

// // Exercise Part 1

// console.log("----- Part 1 -----")

// // 1. Can you drive
// let ageToDrive = prompt("How Old are you?:")
// if (ageToDrive >= 18) {
//     console.log('You are old enough to drive')
// } else {
//     console.log(`You will be able to drive in ${18 - ageToDrive} years`)
// }

// // 2. Compare values

// let myAge = prompt('Enter your Age:')
// let yourAge = 25
// if (myAge > yourAge) {
//     console.log(`You are ${myAge - yourAge} years older than I am`)
// } else if (myAge < yourAge) {
//     console.log(`You are ${yourAge - myAge} years younger than me`)
// } else if (myAge == yourAge) {
//     console.log('We are the same age!')
// } else {
//     console.log('You did not give me an age')
// }

// // 3. Greater than, Less Than
// let a = 4
// let b = 3

// if (a > b) {
//     console.log("A is greater than B")
// } else if (a == b){
//     console.log ("A is the same as B")
// } else {
//     console.log("B is greater than A")
// }

// let greater_than = a > b
// greater_than
//     ? console.log("A is better than B")
//     : console.log("B is better than A")

// // 4. Even or Odd
// let even_check = prompt("Enter a number:")
// if (even_check % 2 == 0) {
//     console.log(`${even_check} is an even number`)
// } else {
//     console.log(`${even_check} is an odd number`)
// }

// // Exercise Part 2

// console.log("----- Part 2 -----")

// // 1. Grades
// let grade = prompt('What did you get on the exam?:')
// grade_real = parseInt(grade)
// console.log("What is the grade provided " + grade_real)
// if (grade_real <= 100 && grade_real >= 80) {
//     console.log('A')
// } else if (grade_real <= 79 && grade_real >= 70) {
//     console.log('B')
// } else if (grade_real <= 69 && grade_real >= 60) {
//     console.log('C')
// } else if (grade_real <= 59 && grade_real >= 50) {
//     console.log('D')
// } else if (grade_real <= 49 && grade_real >= 0) {
//     console.log('F')
// }

// // 2. Season
// let season = prompt('Enter a Month')
// let season_lower = season.toLowerCase()
// console.log("Season? " + season_lower)
// switch(season_lower) {
//     case 'september':
//     case 'october' :
//     case 'november':
//         console.log('Autum')
//         break
//     case 'december':
//     case 'january' :
//     case 'february':
//         console.log('Winter')
//         break
//     case 'march':
//     case 'april':
//     case 'may' :
//         console.log('Spring')
//         break
//     case 'june':
//     case 'july': 
//     case 'august':
//         console.log('Summer')
//         break
// }

// // 3. Weekend/Weekday
// let day_of_week = prompt('What is the day today?')
// let day_of_week_lower = day_of_week.toLowerCase()

// switch(day_of_week_lower) {
//     case 'saturday':
//     case 'sunday':
//         console.log('Weekend')
//         break
//     case 'monday':
//     case 'tuesday': 
//     case 'wednesday': 
//     case 'thursday' : 
//     case 'friday':
//         console.log('Weekday')
//         break
// }

// Exercise Part 3

// 1. 
console.log("----- Part 3 -----")

let month_length = prompt('Give me a month')
let month_length_lower = month_length.toLowerCase()

switch(month_length_lower) {
    case 'january':
    case 'march':
    case 'may': 
    case 'july': 
    case 'august': 
    case 'october': 
    case 'december':
        console.log('This month has 31 days')
        break
    case 'february':
        console.log('This month has 28 Days')
        break
    case 'april':
    case 'june' :
    case 'september':
    case 'november':
        console.log('This month has 30 Days')
        break
}

// 2.
let month_length_leap = prompt('Give me a month')
let month_length_leap_lower = month_length_leap.toLowerCase()

let year_leap = prompt('Give a year')

let isLeap = year_leap % 4 == 0

switch(month_length_leap_lower) {
    case 'january':
    case 'march': 
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log('This month has 31 days')
        break
    case 'february':
        if (isLeap) {
            console.log("29 Days")
        } else {
            console.log("28 Days")
        }
        break
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log('30 Days')
        break
    default:
        console.log('Error')
}
