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
console.log(fullName_2('Madi','Gonzalez'))

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

console.log("-- 11 --")

console.log("-- 12 --")

console.log("-- 13 --")

console.log("-- 14 --")

console.log("-- 15 --")

console.log("-- 16 --")

console.log("-- 17 --")

console.log("-- 18 --")


// Exercise Part 3
console.log("----- Part 3 -----")

console.log("-- 1 --")

console.log("-- 2 --")

console.log("-- 3 --")

console.log("-- 4 --")

console.log("-- 5 --")

console.log("-- 6 --")

console.log("-- 7 --")

console.log("-- 8 --")

console.log("-- 9 --")

console.log("-- 10 --")

console.log("-- 11 --")

console.log("-- 12 --")

console.log("-- 13 --")

console.log("-- 14 --")

console.log("-- 15 --")

console.log("-- 16 --")

console.log("-- 17 --")

console.log("-- 18 --")

console.log("-- 19 --")

console.log("-- 20 --")