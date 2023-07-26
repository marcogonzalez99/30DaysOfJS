// Exercise Part 1
console.log("----- Part 1 -----")

console.log("-- 1 --")
function fullName() {
    console.log("Marco Gonzalez")
}
fullName()

console.log("-- 2 --")
function fullName_2(firstName, lastName){
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(fullName_2('Marco','Gonzalez'))

console.log("-- 3 --")
function addNumbers(x,y) {
    let sum = x + y
    return sum
}
console.log(addNumbers(5,10))

console.log("-- 4 --")
function areaOfRectangle(length, width) {
    let area = length * width
    return area
}
console.log(areaOfRectangle(10,20))

console.log("-- 5 --")
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(10,20))

console.log("-- 6 --")
function volumeOfRectPrism(length, width, height) {
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism(10,5,2))

console.log("-- 7 --")
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(5))

console.log("-- 8 --")
function circumOfCircle(r) {
    let circum = 2 * Math.PI * r
    return circum
}
console.log(circumOfCircle(5))

console.log("-- 9 --")
function density(mass, volume) {
    let density = mass/volume
    return density
}
console.log(density(10,2))

console.log("-- 10 --")
function speed(distance, time) {
    let speed = distance / time
    return speed
}
console.log(speed(100,5))

console.log("-- 11 --")
function weight(mass, gravity) {
    let weight = mass * gravity
    return weight
}
console.log(weight(10,50))

console.log("-- 12 --")
function convertCelsiusToFahrenheit(c) {
    let fahrenheit = (c * (9/6) + 32)
    return fahrenheit
}
console.log(convertCelsiusToFahrenheit(100))

console.log("-- 13 --")
function bmi(weight, height) {
    let bmi = (weight / (height * height))
    if (bmi <= 18.5) {
        return "Underweight"
    } else if (18.5 < bmi && bmi <= 24.9) {
        return "Normal Weight"
    } else if (25 < bmi && bmi <= 29.9) {
        return "Overweight"
    } else if (30 <= bmi) {
        return "Obese"
    }
}
console.log(bmi(72,1.72))

console.log("-- 14 --")
function checkSeason(season) {
    switch(season) {
        case 'september':
        case 'october' :
        case 'november':
            return 'Autum'
        case 'december':
        case 'january' :
        case 'february':
            return 'Winter'
        case 'march':
        case 'april':
        case 'may' :
            return'Spring'
        case 'june':
        case 'july': 
        case 'august':
            return 'Summer'
    }
}
let season = prompt("Pick a month")
console.log(checkSeason(season))

console.log("-- 15 --")
function getMax(x,y,z) {
    if (x > y && x > z) {
        return x
    } else if (y > x && y > z) {
        return y
    } else if (z > x && z > y) {
        return z
    } else {
        return "No Max"
    }
}
console.log(getMax(1,0,3))
console.log(getMax(50,10,4))
console.log(getMax(100,2,500))

// Exercise Part 2
console.log("----- Part 2 -----")

console.log("-- 1 --")
function solveLinEquation(a,b,c,x,y) {
    let linEq = (a * x) + (b * y) + c
    return linEq 
}
console.log(solveLinEquation(1,4,4,5,4))

console.log("-- 2 --")
function solveQuadratic(a = 0,b = 0,c = 0) {
    let roots = []
    let discriminate = (b * b) - (4 * a * c)
    if (discriminate == 0) {
        // One root
        let x = (-b + Math.sqrt((b * b) - (4 * a * c)))/2
        roots.push(x)
    } else if (discriminate > 0) {
        // Two Roots
        let x_1 = (-b + Math.sqrt((b * b) - (4 * a * c)))/2
        let x_2 = (-b - Math.sqrt((b * b) - (4 * a * c)))/2
        roots.push(x_1)
        roots.push(x_2)
    } else if (discriminate < 0) {
        roots.push(0)
    }
    return roots
}
console.log(solveQuadratic()) // {0}
    console.log(solveQuadratic(1, 4, 4)) // {-2}
    console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    console.log(solveQuadratic(1, -1, 0)) //{1, 0}

console.log("-- 3 --")
function printArray(array) {
    for (const element of array) {
        console.log(element)
    }
}
printArray([1,2,3,4,5])
printArray(['Marco','Madi'])

console.log("-- 4 --")
function date() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDay()

    let hour = date.getHours()
    let minute = date.getMinutes()

    if (hour < 10) {
        hour = "0"+hour
    }
    if (minute < 10) {
        minute = "0"+minute
    }
    return `${day}/${month}/${year} ${hour}:${minute}`
    
}
console.log(date())

console.log("-- 5 --")
function swap(x,y) {
    let y_x = x
    let x_y = y
    return `x = ${x_y}, y = ${y_x}`
}
console.log(swap(5,10))

console.log("-- 6 --")
function reverse_array(array) {
    let reversed = []
    for (let i = array.length-1; i >= 0; i--) {
        reversed.push(array[i])
    }
    return reversed
}
console.log(reverse_array([1,2,3,4,5]))
console.log(reverse_array(['Soccer','Tennis','Baseball','Hockey']))

console.log("-- 7 --")
function capitalizedArray(array) {
    let capitalizedArray = []
    for (const element of array) {
        capitalizedArray.push(element.toUpperCase())
    }
    return capitalizedArray
}
console.log(capitalizedArray(["Japan",'canada','usa','germany']))

console.log("-- 8 --")
let add_array = []
function addItem(item) {
    add_array.push(item)
}
addItem("Soccer")
addItem(6)
addItem(false)
console.log(add_array)

console.log("-- 9 --")
let remove_array = [1,2,3,4,5,6]
function removeItem(index) {   
    if (index < remove_array.length) {
        return [remove_array.slice(0,index),remove_array.slice(index + 1)]
    } else {
        return "Unable to find Index"
    }
}
console.log(removeItem(3))
console.log(removeItem(9))

console.log("-- 10 --")
function sumOfNumbers(number) {
    let sum = 0
    for (let i = 0; i <= number; i++){
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(10))

console.log("-- 11 --")
function sumOfOdds(number) {
    let sum = 0
    for (let i = 0; i <= number; i++){
        if(i % 2 != 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfOdds(10))

console.log("-- 12 --")
function sumOfEvens(number) {
    let sum = 0
    for (let i = 0; i <= number; i++){
        if(i % 2 == 0) {
            sum += i
        }
    }
    return sum
}
console.log(sumOfEvens(10))

console.log("-- 13 --")
function evenAndodds(number) {
    let odd = 0
    let even = 0
    for (let i = 0; i <= 100; i++) {
        if (i % 2 != 0) {
            odd += 1
        } else if (i % 2 == 0){
            even += 1
        }
    }
    return `The number of odds are ${odd}, the number of evens are ${even}`
}
console.log(evenAndodds(100))

console.log("-- 14 --")
function sumOfArgs() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sumOfArgs(1,2,3,4,5))
console.log(sumOfArgs(100,200,300,900))

console.log("-- 15 --")
function randomUserIp() {
    return `${Math.round(Math.random() * 256)}.${Math.round(Math.random() * 256)}.${Math.round(Math.random() * 256)}.${Math.round(Math.random() * 256)}`
}
console.log(randomUserIp())
console.log(randomUserIp())

console.log("-- 16 --")
function randomMacAddress() {
    let mac = 'abcdefABCDEF0123456789'
    let macAddress = ''
    for (let i = 0; i < 5; i++) {
        macAddress +=  mac[Math.floor(Math.random() * mac.length)]
        macAddress += mac[Math.floor(Math.random() * mac.length)]
        macAddress +=':'
    }
    macAddress += mac[Math.floor(Math.random() * mac.length)]
    macAddress += mac[Math.floor(Math.random() * mac.length)]
    return macAddress
}

console.log(randomMacAddress())
console.log(randomMacAddress())

console.log("-- 17 --")
function randomHexaNumberGenerator() {
    let hex = 'abcdefABCDEF0123456789'
    let random_hex = '#'
    for (let i = 0; i <= 5; i++) {
        random_hex += hex[Math.floor(Math.random() * hex.length)]
    }
    return random_hex
}
console.log(randomHexaNumberGenerator())
console.log(randomHexaNumberGenerator())

console.log("-- 18 --")
function userIdGenerator() {
    let characters_list = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let id = ''
    for (let i = 0; i < 7; i++) {
        id += characters_list[Math.round(Math.random() * characters_list.length)]
    }
    return id
}
console.log(userIdGenerator())
console.log(userIdGenerator())


// Exercise Part 3
console.log("----- Part 3 -----")

console.log("-- 1 --")
function userIdGeneratedByUser() {
    let characters_list = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let numOfChar = prompt('How many characters')
    let numOfId = prompt('How many IDs would you like?')
    for (let i = 0;i < numOfId; i++) {
        let id = ''
        for (let i = 0; i < numOfChar; i++) {
            id += characters_list[Math.round(Math.random() * characters_list.length)]
        }
        console.log(id)
    }
}
userIdGeneratedByUser()

console.log("-- 2 --")
function rgbColorGenerator() {
    let r_color = Math.floor(Math.random() * 255)
    let g_color = Math.floor(Math.random() * 255)
    let b_color = Math.floor(Math.random() * 255)
    return `rgb(${r_color}, ${g_color}, ${b_color})`
}
console.log(rgbColorGenerator())
console.log(rgbColorGenerator())

console.log("-- 3 --")
function arrayOfHexaColors(number) {
    let hex_colors = []
    let hex = 'abcdefABCDEF0123456789'
    for (let i = 0; i < number; i++) {
        let random_hex = '#'
        for (let i = 0; i <= 5; i++) {
            random_hex += hex[Math.floor(Math.random() * hex.length)]
        }
        hex_colors.push(random_hex)
    }
    return hex_colors
}
console.log(arrayOfHexaColors(2))
console.log(arrayOfHexaColors(10))

console.log("-- 4 --")
function arrayOfRgbColors(number) {
    let rbg_colors = []
    for (let i = 0; i < number; i++) {
        let r_color = Math.floor(Math.random() * 255)
        let g_color = Math.floor(Math.random() * 255)
        let b_color = Math.floor(Math.random() * 255)
        let rbg = `rbg(${r_color},${g_color},${b_color})`
        rbg_colors.push(rbg)
    }
    return rbg_colors
}
console.log(arrayOfRgbColors(4))

console.log("-- 5 --")
function convertHexaToRgb(hexCode) {
    if (hexCode.startsWith("#")) {
        hexCode = hexCode.slice(1)
    }
    let r = parseInt(hexCode.substr(0,2), 16)
    let g = parseInt(hexCode.substr(2,2), 16)
    let b = parseInt(hexCode.substr(4,2), 16)
    return `rbg(${r},${g},${b})`
}
console.log(convertHexaToRgb('#FF0000'))
console.log(convertHexaToRgb('#cc1890'))

console.log("-- 6 --")
function convertRgbToHexa(r,g,b) {
    let hexR = r.toString(16).padStart(2,'0') 
    let hexG = g.toString(16).padStart(2,'0') 
    let hexB = b.toString(16).padStart(2,'0') 

    return `#${hexR}${hexG}${hexB}`
}
console.log(convertRgbToHexa(224,240,19))
console.log(convertRgbToHexa(90,56,200))

console.log("-- 7 --")
function generateColors(type,number) {
    if (type == "hexa"){
        let hex_colors = []
        let hex = 'abcdefABCDEF0123456789'
        for (let i = 0; i < number; i++) {
            let random_hex = '#'
            for (let i = 0; i <= 5; i++) {
                random_hex += hex[Math.floor(Math.random() * hex.length)]
            }
            hex_colors.push(random_hex)
        }
    return hex_colors
    } else if (type == 'rgb') {
        let rbg_colors = []
        for (let i = 0; i < number; i++) {
            let r_color = Math.floor(Math.random() * 255)
            let g_color = Math.floor(Math.random() * 255)
            let b_color = Math.floor(Math.random() * 255)
            let rbg = `rbg(${r_color},${g_color},${b_color})`
            rbg_colors.push(rbg)
        }
        return rbg_colors
    }
}
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

console.log("-- 8 --")
function shuffleArray(array) {
    let shuffledArray = array.slice()
    shuffledArray.sort(() => Math.random() - 0.5)

    return shuffledArray
}
console.log(shuffleArray([1,3,5,7,9]))
console.log(shuffleArray([1,2,3,4,5,6,7,8,9]))

console.log("-- 9 --")
function factorial(number) {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    return factorial
}
console.log(factorial(3))
console.log(factorial(6))
console.log(factorial(9))

console.log("-- 10 --")
function isEmpty(param) {
    if (param) {
        return "It is not empty"
    } else {
        return "It is empty"
    }
}
console.log(isEmpty())
console.log(isEmpty(''))
console.log(isEmpty(true))
console.log(isEmpty(99))

console.log("-- 11 --")
function sum() {
    let sum = 0
    for (let i = 0; i< arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(sum(10,20,30,40,50))

console.log("-- 12 --")
function sumOfArrayItems(array) {
    let sum = 0
    for (let i =0; i <= array.length - 1; i++) {
        if (typeof array[i] != 'number') {
            console.log("NaN")
        } else {
            sum += array[i]
        }
    }
    return sum
}
console.log(sumOfArrayItems([1,2,3,4,5,6,7,8,9,10]))
console.log(sumOfArrayItems([1,2,3,false,'seven',9]))

console.log("-- 13 --")
function average(array) {
    let sum = 0
    let array_count = 0
    for (let i =0; i <= array.length - 1; i++) {
        if (typeof array[i] != 'number') {
            console.log("NaN",array[i])
        } else {
            sum += array[i]
            array_count++
        }
    }
    console.log("Sum",sum)
    console.log("ArrayCount:",array_count)
    let average = sum / array_count
    return average
}
console.log(average([1,5,10,2,4]))
console.log(average([1,5,false,2,4]))

console.log("-- 14 --")
function modifyArray(array) {
    if (array.length < 5 ) {
        return "Not Found" 
    }
    array[4] = array[4].toUpperCase()
    return array
}
console.log(modifyArray(["Canada",'italy','japan','germany','portugal','usa']))
console.log(modifyArray(["Canada",'italy','portugal','usa']))

console.log("-- 15 --")
function isPrime(number) {
    let isPrime = true
    if (number <= 1) {
        isPrime = false
    } else {
        for (let j = 2; j <= Math.sqrt(number); j++) {
            if (number % j === 0) {
                isPrime = false
                return `${number} is not a prime number`
            } 
        } 
    }
    if (isPrime) {
        return `${number} is a prime number`
    }
}
console.log(isPrime(11))
console.log(isPrime(24))

console.log("-- 16 --")
function isUnique(array) {
    for (let i = 0; i <= array.length; i++) {
        let compare = array[i]
        for (let j = i + 1; j <= array.length; j++) {
            if (compare == array[j]) {
                return "Not a unique array"
            }  
        }
    }
    return "Unique Array"
}
console.log(isUnique([1,2,3,4,5]))
console.log(isUnique([1,2,3,5,5]))
console.log(isUnique([4,566,32,62,4,51]))
console.log(isUnique(1,412,4734,41,4,63,6,634,3))
// Make more efficient

console.log("-- 17 --")
function sameDataType(array) {
    let data = typeof array[0]
    for (let i = 0; i <= array.length - 1; i++) {
        if (typeof array[i] != data) {
        
            return "Not all same data type"
        }
    }
    return "Same data type"
}
console.log(sameDataType([1,2,3,4,5]))
console.log(sameDataType([false,"String",1,2,3]))

console.log("-- 18 --")
function isValidVariable(variable) {
    let variable_name = [...variable]
    let regex = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$_"
    for (let i = 0; i < variable_name.length; i ++) {
        if (variable_name[0] == "1" || variable_name[0] == "2" ||variable_name[0] == "3" ||variable_name[0] == "4" ||variable_name[0] == "5" ||variable_name[0] == "6" ||variable_name[0] == "7" ||variable_name[0] == "8" ||variable_name[0] == "9" ||variable_name[0] == "0") {
            return "Not Valid"
        }
        for (let j = 0; j < regex.length; j++) {
            if (variable_name[i] == regex[j]) {
                break
            }
            if (j == regex.length - 1) {
                return "Not A Valid Name"
            }
        }
    }
    return "Valid Name"

}

console.log(isValidVariable('check_score'))
console.log(isValidVariable('is*valid'))
console.log(isValidVariable('1Variable'))
console.log(isValidVariable("$varibale_name"))

console.log("-- 19 --")
function sevenRandomNumbers() {
    let random = []
    let random_number = Math.floor(Math.random() * 10)
    random.push(random_number)
    for (let i =0; i < 7; i++) {
        while (random.includes(random_number)) {
            random_number = Math.floor(Math.random() * 10)
        }
        random.push(random_number)
    }
    return random
    
}
console.log(sevenRandomNumbers())
console.log(sevenRandomNumbers())
console.log(sevenRandomNumbers())

console.log("-- 20 --")
function reverseCountries(array) {
    let reversed_Countries = []
    for (let i = array.length - 1; i > 0; i--) {
        reversed_Countries.push(array[i])
    }
    return reversed_Countries
}
const countries = [
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
console.log(reverseCountries(countries))