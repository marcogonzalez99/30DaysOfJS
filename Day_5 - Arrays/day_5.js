import {countries} from "./countries.js"
import {webTechs_import} from "./webTechs.js"

// Two ways to create an Array

const arr = Array()

// or

const arr_2 = []

// A array with initial values
const numbers = [1,2,3,4,5]
const progLanguages = ['HTML', 'CSS','JS','React']

// Printing
console.log('Number:', numbers)
console.log('# of: ',numbers.length)

console.log('Languages:', progLanguages)
console.log('# of Languages:',progLanguages.length)

// Array of different data types
const array_types = [
    'String',
    250,
    false,
    {country: 'Canada', city: 'Calgary'}
]
console.log("Different Data Types ",array_types)

// Creating array via split
let js = 'CanadaAlbertaCalgary'
const charinJS = js.split('')
console.log("Chars in an String ", charinJS)

// Accessing Array Items
let firstNumber = numbers[0]
console.log("First Element: ",firstNumber)

// Find the last item in a list
let last_number = numbers.length - 1
console.log("Last Element: ",numbers[last_number])

// Modifying an element in the array
numbers[0] = 10
numbers[2] = 45
console.log("Modified Array: ",numbers)

// Array Constructor
const tenEmptyValues = Array(10)

// .fill
const eightGValues = Array(4).fill('G')
console.log("Eight Values ",eightGValues)

// Concat Arrays
const first_part = [1,2,3]
const second_part = [4,5,6]
const third_part = first_part.concat(second_part)
console.log("Concat ",third_part)

// Array length
const number_length = [1,2,3,4,5]
console.log("Length ",number_length.length)

// IndexOf
const number_index = [1,2,3,4,5]
console.log('Index 1:',number_index.indexOf(0))

// Check if element exists
const fruits = ['apple','banana','orange']
const index = fruits.indexOf('banana')

if (index === -1) {
    console.log('Does not exist')
} else {
    console.log('Exists')
}

// lastIndexOf
console.log("Last Index of 3: ",numbers.lastIndexOf(3))
console.log('Last Index of 7: ',numbers.lastIndexOf(7))

// Includes
console.log("Includes :",numbers.includes(3))
console.log("Includes :",numbers.includes(6))

// isArray Checks
console.log("Is an Array? ",Array.isArray(numbers))
const number_normal = 100
console.log("Is an Array? ", Array.isArray(number_normal))

// toString
console.log("String - ", numbers.toString())

// Join
console.log('Join: ', numbers.join(' '))

// Slice
console.log("Slice: ",numbers.slice((1,3)))

// Splice
console.log("Splice ",numbers.splice((2,4,1,2,3,4)))

// Push 
numbers.push(6)
console.log("Push: ", numbers)

// Pop
numbers.pop()
console.log("After Pop - ",numbers)

// Shift
console.log("Before Shift - ",numbers)
numbers.shift()
console.log("After Shift - ", numbers)

// Unshift
console.log("Before unShift - ",numbers)
numbers.unshift(99)
console.log("After unShift - ", numbers)

// Reverse
console.log("Before reverse - ",numbers)
numbers.reverse()
console.log("After reverse - ", numbers)

// Sorting
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

webTechs.sort()
console.log("Sorted ", webTechs)

// Array inside an Array
const frontEnd = ['HTML', 'CSS', 'JS']
const backEnd = ['Node' , 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log("FullStack ",fullStack)

// Exercise Part 1
console.log("----- Part 1 -----")


// 1. Declare an Empty Array
const empty_array = new Array()
console.log("1 -",empty_array)

// 2. Declare array with more than 5 elements
const array_test = new Array(1,2,3,4,5,6,7,8,9)
console.log("2 - ",array_test)

// 3. Find length
console.log("3 - ",array_test.length)

// 4. First, Middle and Last
let middle = (Math.floor((array_test.length - 1) / 2))
console.log("4 - ", array_test[0])
console.log("4 - ", array_test[middle])
console.log("4 - ", array_test[[array_test.length - 1]])

// 5. Different Data Types
const multi_dataTypes = new Array('String',200, false,null,[1,2,3,4])
console.log("5 - ", multi_dataTypes)

// 6. Declare
const itCompanies = new Array("Facebook", "Google", "Microsoft" ,"Apple", "IBM", "Oracle", "Amazon")

// 7. Print
console.log("7 - ", itCompanies)

// 8. How many in the array
console.log("8 - ", itCompanies.length - 1)

// 9. Print First, Middle, Last
let middle_company = (Math.floor((itCompanies.length - 1) / 2))
console.log("9 - ", itCompanies[0])
console.log("9 - ", itCompanies[middle_company])
console.log("9 - ", itCompanies[[itCompanies.length - 1]])

// 10. Print each company
console.log("10 - ",itCompanies[0])
console.log("10 - ",itCompanies[1])
console.log("10 - ",itCompanies[2])
console.log("10 - ",itCompanies[3])
console.log("10 - ",itCompanies[4])
console.log("10 - ",itCompanies[5])
console.log("10 - ",itCompanies[6])

// 11. Print each company uppercase
console.log("11 - ",itCompanies[0].toUpperCase())
console.log("11 - ",itCompanies[1].toUpperCase())
console.log("11 - ",itCompanies[2].toUpperCase())
console.log("11 - ",itCompanies[3].toUpperCase())
console.log("11 - ",itCompanies[4].toUpperCase())
console.log("11 - ",itCompanies[5].toUpperCase())
console.log("11 - ",itCompanies[6].toUpperCase())

// 12. Print as a sentence
console.log("12 - ", itCompanies.join(", ") + " are big IT Companies")

// 13. Check if company exists
const company_index = itCompanies.indexOf('Apple')

if (company_index === -1) {
    console.log("13 - Company Does not Exist")
} else {
    console.log("13 - ", itCompanies[company_index])
}

// 14. Filter out companies with more than one "O"
const filtered_companies = []
while (itCompanies.length > 0) {
    let curr_index = itCompanies[0].toLowerCase()
    let count = 0
    let split_company = curr_index.split('')
    while (split_company.length > 0) {
        if (split_company[0] == 'o') {
            count++
        }
        split_company.shift()
    }
    if (count < 2) {
        filtered_companies.push(curr_index)
    }
    itCompanies.shift()
}
console.log("14 - ",filtered_companies)

// Create a new Array
const itCompanies_2 = new Array("Facebook", "Google", "Microsoft" ,"Apple", "IBM", "Oracle", "Amazon")

// 15. Sort
console.log("15 -", itCompanies_2.sort())

// 16. Reverse 
console.log("16 - ", itCompanies_2.reverse())


// 17. Slice the first 3 companies
const itCompanies_3 = ["Facebook", "Google", "Microsoft" ,"Apple", "IBM", "Oracle", "Amazon"]
console.log("17 - ", itCompanies_3.slice((0,3)))

// 18. Slice last 3
const itCompanies_4 = ["Facebook", "Google", "Microsoft" ,"Apple", "IBM", "Oracle", "Amazon"]
console.log("18 - ", itCompanies_4.slice(0,-3))

// 19. Slicing Middle Company
const itCompanies_5 = ["Facebook", "Google", "Microsoft" ,"Apple", "IBM", "Oracle", "Amazon"]
let middle_index = Math.floor(itCompanies_5.length / 2)

let company_first = itCompanies_5.slice(0, middle_index)
let company_second = itCompanies_5.slice(middle_index + 1)
let combine = [company_first, company_second]
console.log("19 - ",combine)

// 20. Remove first element
const itCompanies_6 = ["Facebook", "Google", "Microsoft" ,"Apple", "IBM", "Oracle", "Amazon"]
itCompanies_6.shift()
console.log("20 - ", itCompanies_6)

// 21. Remove Middle element
const itCompanies_7 = ["Facebook", "Google", "Microsoft" ,"Apple", "IBM", "Oracle", "Amazon"]
itCompanies_7.splice(middle_index,1)
console.log("21 - ",itCompanies_7)

// 22. Remove last Element
const itCompanies_8 = ["Facebook", "Google", "Microsoft" ,"Apple", "IBM", "Oracle", "Amazon"]
itCompanies_8.pop()
console.log("22 - ", itCompanies_8)

// 23. Remove all elements
let itCompanies_9 = ["Facebook", "Google", "Microsoft" ,"Apple", "IBM", "Oracle", "Amazon"]
itCompanies_9 = []
console.log("23 - ",itCompanies_9)

// Exercise Part 2
console.log("----- Part 2 -----")

// 1. Import
console.log("1 -",countries)
console.log("1 - ", webTechs_import)

// 2. Remove punctuations
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.match(/\b\w+\b/g)
console.log("2 - ",words)
console.log("2 - ",words.length)

// 3. Shopping Cart

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

let meat_index = shoppingCart.indexOf('Meat')

if (meat_index === -1) {
    shoppingCart.unshift('Meat')
} else {
    console.log("3- Meat is already on the list")
}
console.log("3 - ",shoppingCart)

let sugar_index = shoppingCart.indexOf('Sugar')

if (sugar_index === -1) {
    shoppingCart.push('Sugar')
} else {
    console.log("3- Sugar is already on the list")
}
console.log("3 - ",shoppingCart)

let allergic = true

if (allergic) {
    let honey_index = shoppingCart.indexOf('Honey')
    shoppingCart.splice(honey_index,1)
}
console.log("3- Removed Honey ", shoppingCart)

let tea_index = shoppingCart.indexOf('Tea')

if (tea_index !== -1) {
    shoppingCart[tea_index] = 'Green Tea'
}

console.log("3 - ", shoppingCart)

// 4. Checking from imports
console.log(countries)
let ethopia_index = countries.indexOf("Ethiopia")
if (ethopia_index === -1) {
    countries.push('Ethiopia')
} else {
    console.log("ETHIOPIA")
}
console.log("4 - ",countries)

// 5. Checking from Imports
console.log(webTechs_import)
let web_index = countries.indexOf("Sass")
if (web_index === -1) {
    webTechs_import.push('Sass')
} else {
    console.log("Sass is a CSS Preprocess")
}
console.log("5 - ",webTechs_import)

// 6. Concat
const frontEnd_2 = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd_2 = ['Node','Express', 'MongoDB']

const fullStack_2 = [frontEnd_2, backEnd_2]
console.log("6 - ",fullStack_2)

// Exercise Part 3
console.log("----- Part 3 -----")

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log("1- ",ages[0])
console.log("1- ",ages[ages.length - 1])
if ((ages.length - 1) % 2 == 0) {
    console.log("Middle Age: ",ages[ages.length/2])
} else {
    let first_ages = Math.floor((ages.length - 1) / 2)
    let second_ages = Math.round((ages.length - 1) / 2)

    console.log("1 - ", ages[first_ages] + " " + ages[second_ages])
}

let total = 0
let x = 0
while (x < ages.length) {
    total += ages[x]
    x++
}

total = total / ages.length - 1

console.log("1 - ",total)

console.log("1 - ",ages[ages.length - 1] - ages[0])

console.log("1 - ",Math.abs(ages[0] - total))
console.log("1 - ",Math.abs(ages[ages.length - 1] - total))
console.log("1 - ",Math.abs((ages[0] - total) - (ages[ages.length - 1] - total)))

// 2.
const countries_final = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

// console.log("2 - ", countries_final.slice(0,10))

if ((countries_final.length - 1) % 2 == 0) {
    console.log("Middle Country: ",countries_final[(countries_final.length - 1)/2])
} else {
    let first_country = Math.floor((countries_final.length - 1) / 2)
    let second_country = Math.round((countries_final.length - 1) / 2)

    console.log("3 - ", countries_final[first_country] + " " + countries_final[second_country])
}

if ((countries_final.length - 1) % 2 == 0) {
    let first_section = countries_final.slice(0,((countries_final.length - 1) / 2) + 1)
    let second_section = countries_final.slice(((countries_final.length - 1) / 2)+1)
    let split = [[first_section], [second_section]]
    console.log(split)
} else {
    let first_country = Math.floor((countries_final.length - 1) / 2)
    let second_country = Math.round((countries_final.length - 1) / 2)

    console.log("3 - ", countries_final[first_country] + " " + countries_final[second_country])
}