// Part 1
console.log("------ Part 1 ------")

// 1. Declare variables
let firstName = 'Marco'
let lastName = 'Gonzalez'
let country = 'Canada'
let city = 'Calgary'
let age = 23
let isMarried = true

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

// 2. Boolean
console.log(typeof '10' == typeof 10)

// 3. Boolean
console.log(typeof parseInt('9,8') == typeof 10)

// 4. Truthy and Falsy
let willGetMarried = true
willGetMarried
    ? console.log('We Will Get Married')
    : console.log('We would still get married')

let hasACar = "true"
hasACar 
    ? console.log('I have a Yaris')
    : console.log('I am broke')

let hasDesktop = 2300
hasDesktop
    ? console.log("I have money")
    : console.log('I HAVE NO MONEY')

let falsy = ''
falsy
    ? console.log('Truth')  
    : console.log('False')

let falsy_value = 0
falsy_value
    ? console.log("Truth")
    : console.log("False")

let newest_falsy = undefined
newest_falsy
    ? console.log("TRUTHY")
    : console.log("FALSY")

// 5.
console.log('Truth Checks')

// True
// True
// False
// False
// True
// False *
// False
// True *
// True *
// False *
// True *

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

let python = 'python'
let jargon = 'jargon'

let python_length = python.length
let jargon_length = jargon.length
let length_comparison
length_comparison
    ? console.log('True')
    : console.log('False')

// 6. Expresions
console.log('Truth Checks Part 2')

// True
// False
// True
// True
// False
// True *
// True
// False
// True
// False *
// False

let first_word = 'dragon'
let second_word = 'python'

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log((4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(!(first_word.includes('on') && second_word.includes('on')))

// 7. Date Objects
const date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth() + 1)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime())

// Part 2
console.log("------ Part 2 ------")

// 1. Prompt
let base = prompt("Enter a base value")
let height = prompt("Enter a height value")
console.log( 0.5 * base * height)

// 2. Prompt part 2
let side_a = prompt('Enter side A')
let side_b = prompt('Enter side B')
let side_c = prompt('Enter side C')

let perimeter = parseInt(side_a) + parseInt(side_b) + parseInt(side_c)
console.log(perimeter)


// 3. Length/Width
let triangle_length = prompt('Give a Length')
let triangle_width = prompt('Give a Width')
let per = parseInt(triangle_length) * parseInt(triangle_width)

console.log("Area - " + (triangle_length * triangle_width))
console.log(`Perimeter -  ${parseInt(2 * per)}`)

// 4. Circle
let circle_radius = parseInt(prompt('Enter a Radius'))
const PI = Math.PI
console.log(`${PI * circle_radius * circle_radius}`)
console.log(`${2 * PI * circle_radius}`)

// 5. Slope
// Y = -2
// X = 1
let first_slope = 2

// 6. Slope Continued
let x_1 = 2
let x_2 = 6
let y_1 = 2
let y_2 = 10
let second_slope = ((y_1 - y_2)/(x_1 - x_2))

console.log((y_1 - y_2)/(x_1 - x_2))

// 7. Slope comparison
console.log(first_slope == second_slope)

// 8. Enter Hours
let hours = prompt('Enter Hours')
let rate_per_hour = prompt('Enter Rate Per Hour')

console.log('Your weekly earnings is ' + (hours * rate_per_hour))

let name_length = prompt('Enter your name')
let check_name = name_length > 7
check_name
    ? console.log('Your name is long')
    : console.log('Your name is short')

// 9. 

let first_name = prompt('Give me your first name')
let last_name = prompt('Give me your last name')
let name_check = first_name.length > last_name.length
name_check
    ? console.log(`Your first name ${first_name} is longer that your family name, ${last_name}`)
    : console.log('Your first name is shorter')

// 10. 
let myAge = 200
let yourAge = 25

console.log(`I am ${myAge - yourAge} years older than you.`)

// 11.
let date_2 = new Date()
let birth_year = prompt('Enter birth year')
let current_age = date_2.getFullYear() - birth_year
let oldEnough = current_age >= 18
oldEnough
    ? console.log(`You are ${current_age} you are old enough to drive`)
    : console.log(`You are ${current_age} you will be allowed to drive in ${18 - current_age} years`)

// 12.
let howOld = prompt('Enter the number of years you have lived')
let ageInDays = howOld * 365
let ageinHours = ageInDays * 24
let ageinMinutes = ageinHours * 60
let ageinSeconds = ageinMinutes * 60
console.log(`You have lived for ${ageinSeconds} seconds`)

// 13.
let final_date = new Date()

console.log(`${final_date.getFullYear()}-${final_date.getMonth()}-${final_date.getDay()} ${final_date.getHours()}:${final_date.getMinutes()}`)
console.log(`${final_date.getDay()}-${final_date.getMonth()}-${final_date.getFullYear()} ${final_date.getHours()}:${final_date.getMinutes()}`)
console.log(`${final_date.getDay()}/${final_date.getMonth()}/${final_date.getFullYear()} ${final_date.getHours()}:${final_date.getMinutes()}`)

// Part 3
console.log("------ Part 3 ------")
let part_3_date = new Date()
let part_3_year = part_3_date.getFullYear()
let part_3_month = part_3_date.getMonth()
let part_3_day = part_3_date.getDay()
let part_3_hour = part_3_date.getHours()
let part_3_minute = part_3_date.getMinutes()

if (part_3_hour < 10) {
    part_3_hour = "0"+part_3_hour
}

if (part_3_minute < 10) {
    part_3_minute = "0"+part_3_minute
}

console.log(`${part_3_year}-${part_3_month}-${part_3_day} ${part_3_hour}:${part_3_minute}`)
