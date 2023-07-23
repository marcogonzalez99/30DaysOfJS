// For loop
console.log("-- For Loop --")
for (let i = 0; i <= 5; i++) {
    console.log(i)
}

// Shell Lopp
console.log("-- Shell Loop --")
for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

// Pushing to an array
console.log("-- Pushing to Array Loop --")
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

// Adding values from an Array
console.log("-- Adding values from an Array Loop --")
let numbers = [1,2,3,4,5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum)

// While Loops
console.log("-- While Loop --")
let i = 0
while (i < 5) {
    console.log(i)
    i++
}

// Do While Loop
console.log("-- Do While Loop --")
let h = 0
do {
    console.log(h)
    h++
} while (h < 5)

// for of 
console.log("-- For Of Loop --")
const num = [1,2,3,4,5]
for (const n of num) {
    console.log(n)
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
for (const web of webTechs) {
    console.log(web.toUpperCase())
}

const countries_forOf = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const new_Array = []
for (const country of countries_forOf) {
    new_Array.push(country.toUpperCase())
}
console.log(new_Array)

// Break
console.log("-- Break Loop --")
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        break
    }
    console.log(i)
}

// Continue
console.log("-- Continue Loop --")
for (let i = 0; i < 5; i++) {
    if (i == 3) {
        continue
    }
    console.log(i)
}

// Exercise Part 1
console.log("----- Part 1 -----")
const countries_exercise = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const webTechs_exercise = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

const mernStack = [
    'MongoDB',
    'Express', 
    'React', 
    'Node']

// 1. 
console.log("-- 1 --")
for (i = 0; i <= 10;i++){
    console.log(i)
}

let a = 0
while (a < 11) {
    console.log(a)
    a++
}

let b = 0
do {
    console.log(b)
    b++
} while (b < 11)

// 2. 
console.log("-- 2 --")
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

let c = 10
while (c >= 0) {
    console.log(c)
    c--
}

let d = 10
do {
    console.log(d)
    d--
} while (d >= 0)

// 3.
console.log("-- 3 --")
let e = prompt('Pick a range')
for (let i = 0; i < e; i++) {
    console.log(i)
}

// 4.
console.log("-- 4 --")
for (let i = 1; i <= 7; i++) {
    let row = ""
    for (let j = 0; j < i; j++) {
        row += "#"
    }
    console.log(row)
}
// 5. 
console.log("-- 5 --")
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

// 6. 
console.log("-- 6 --")
console.log("i  | i^2  | i^3")
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  | ${i*i}  | ${i*i*i}`)
}


// 7. 
console.log("-- 7 --")
for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// 8. 
console.log("-- 8 --")
for (let i = 0; i < 101; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// 9. 
console.log("-- 9 --")
for (let i = 0; i <= 100; i++) {
    let isPrime = true
    if (i <= 1) {
        isPrime = false
    } else {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false
                break
            } 
        } 
    }
    if (isPrime) {
        console.log(i)
    }
}

// 10. Sum of all numbers
console.log("-- 10 --")
let sum_10 = 0
for (let i = 0; i <= 100; i++) {
    sum_10 += i
}
console.log("The sum of all numbers from 0 to 100 is",sum_10,".")

// 11.
console.log("-- 11 --")
let sum_even = 0
let sum_odd = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sum_even += i
    } else {
        sum_odd += i
    }
}

console.log("The sum of all evens from 0 to 100 is",sum_even,". And the sum of all odds from 0 to 100 is",sum_odd)

// 12.
console.log("-- 12 --")
let sum_even_2 = 0
let sum_odd_2 = 0
let sums = []
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sum_even_2 += i
    } else {
        sum_odd_2 += i
    }
}
sums = [[sum_even_2, sum_odd_2]]
console.log(sums)

// 13. 
console.log("-- 13 --")
let random_arr = []
for (let i = 0; i <= 5; i++) {
    random_arr.push(Math.random() * 21)
}
console.log(random_arr)

// 14. 
console.log("-- 14 --")
let random_array = []
for (let i = 0; i <= 5; i++) {
    let random = Math.round(Math.random() * 6)
    while (random_array.includes(random)) {
        console.log("Duplicate Detected, randomizing")
        random = Math.round(Math.random() * 6)
    }
    random_array.push(random)
}
console.log(random_array)

// 15. 
console.log("-- 15 --")
let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let id_string = ''
for (let i = 0; i <= 5; i++) {
    id_string += characters[Math.floor(Math.random() * characters.length)]
}
console.log(id_string)

// Exercise Part 2
console.log("----- Part 2 -----")

// 1.
console.log("-- 1 --")
let characters_list = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
let random_string = ''
let length_chosen = prompt('How long do you want your ID to be')
for (let i = 0; i <= length_chosen; i++) {
    random_string += characters_list[Math.floor(Math.random() * characters_list.length)]
}
console.log(random_string)

// 2.
console.log("-- 2 --")
let hex = 'abcdefABCDEF0123456789'
let random_hex = '#'
for (let i = 0; i <= 5; i++) {
    random_hex += hex[Math.floor(Math.random() * hex.length)]
}
console.log(random_hex)

// 3. 
console.log("-- 3 --")
let r_color = Math.floor(Math.random() * 255)
let g_color = Math.floor(Math.random() * 255)
let b_color = Math.floor(Math.random() * 255)

console.log(`rgb(${r_color},${g_color},${b_color})`)

// 4.
console.log("-- 4 --")

let new_array_upper = []
for (const country of countries_exercise) {
    new_array_upper.push(country.toUpperCase())
}
console.log(new_array_upper)

// 5. 
console.log("-- 5 --")
let country_length = []
for (const country of countries_exercise) {
    country_length.push(country.length)
}
console.log(country_length)

// 6. 
console.log("-- 6 --")
let multi_array = []
for (const country of countries_exercise) {
    let temp_array = []
    let code = ''
    temp_array.push(country)
    for (let i = 0; i <= 2; i++){
        code += country[i].toUpperCase()
    }
    temp_array.push(code)
    temp_array.push(country.length)
    multi_array.push(temp_array)
}
console.log(multi_array)

// 7. 
console.log("-- 7 --")
let land_array = []
for (const country of countries_exercise) {
    if (country.includes('land')) {
        land_array.push(country)
    }
}
console.log(land_array)

// 8. 
console.log("-- 8 --")
let ia_array = []
for (const country of countries_exercise) {
    if (country.endsWith('ia')) {
        ia_array.push(country)
    }
}
console.log(ia_array)

// 9. 
console.log("-- 9 --")
let largest = ''
for (const country of countries_exercise) {
    if (country.length > largest.length) {
        largest = country
    }
}
console.log(largest)

// 10. 
console.log("-- 10 --")
let five_char = []
for (const country of countries_exercise) {
    if (country.length == 5) {
        five_char.push(country)
    }
}
console.log(five_char)

// 11. 
console.log("-- 11 --")
let longest_webTech = ''
for (const web of webTechs_exercise) {
    if (web.length > longest_webTech.length) {
        longest_webTech = web
    }
}
console.log(longest_webTech)

// 12. 
console.log("-- 12 --")
let web_multi = []
for (const web of webTechs_exercise) {
    let temp_array = []
    temp_array.push(web)
    temp_array.push(web.length)
    web_multi.push(temp_array)
}
console.log(web_multi)

// 13. 
console.log("-- 13 --") 
let stack = ''
for (const m of mernStack) {
    stack += m[0]
}
console.log(stack)

// 14. 
console.log("-- 14 --")

for (const web of webTechs_exercise) {
    console.log(web)
}

// 15. 
console.log("-- 15 --")
let fruits = ['banana', 'orange', 'mango', 'lemon']
for (i = fruits.length-1; i >= 0; i--) {
    console.log(fruits[i])
}

// 16. 
console.log("-- 16 --")
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (stack of fullStack) {
    for (let i = 0; i < stack.length; i++) {
        console.log(stack[i])
    }
}

// Exercise Part 3
console.log("----- Part 3 -----")

// 1. 
console.log("-- 1 --")
const country_copy = countries_exercise.slice()
console.log(country_copy)

// 2.
console.log("-- 2 --")
let sortedCountries = country_copy.sort()
console.log(sortedCountries)

// 3.
console.log("-- 3 --")
console.log(webTechs_exercise.sort())
console.log(mernStack.sort())

// 4.
console.log("-- 4 --")
import { countries_export } from "./countries.js"
let land_array_export = []
for (const country of countries_export) {
    if (country.includes('land')) {
        land_array_export.push(country)
    }
}
console.log(land_array_export)

// 5.
console.log("-- 5 --")
let longest_country_export = ''
for (const country of countries_export) {
    if (country.length > longest_country_export.length) {
        longest_country_export = country
    }
}
console.log(longest_country_export)

// 6. Skip, same as 4
console.log("-- 6 --")
let land_array_export_2 = []
for (const country of countries_export) {
    if (country.includes('land')) {
        land_array_export_2.push(country)
    }
}
console.log(land_array_export_2)

// 7. 
console.log("-- 7 --")
let four_char = []
for (const country of countries_export) {
    if (country.length == 5) {
        four_char.push(country)
    }
}
console.log(four_char)

// 8. 
console.log("-- 8 --")
let two_words = []
for (const country of countries_export) {
    if (country.includes(" ")) {
        two_words.push(country)
    }
}
console.log(two_words)

// 9.
console.log("-- 9 --")
countries_export.reverse()
let capital_country = []
for (const country of countries_export) {
    capital_country.push(country.toUpperCase())
}
console.log(capital_country)