const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

console.log("-- Part 1 -- ")
console.log("-- 1 --")
// The difference between forEach, map, filter, and reduce is what they do to the array 
// that is fed to it. forEach will perform a task to each element. map will apply a attribute to each
// array item. filter will find elements that fufill the condition. reduce adds up the elements

console.log("-- 2 --")
// Define a callback function
function callback(item) {
  return item * 2
}

const ogArray = [1,2,3,4,5]

// Use forEach
const forEachArray = []
ogArray.forEach(function(item) {
  forEachArray.push(callback(item))
})

// Use map
const resultMap = ogArray.map(callback)

// Use filter
const filterResult = ogArray.filter(function(item) {
  return callback(item) > 5
})

// Use reduce
const resultReduce = ogArray.reduce(function(accumulator,item) {
  return accumulator + callback(item)
}, 0)

console.log(forEachArray)
console.log(resultMap)
console.log(filterResult)
console.log(resultReduce)

console.log("-- 3 --")
countries.forEach(element => console.log(element))

console.log("-- 4 --")
names.forEach(element => console.log(element))

console.log("-- 5 --")
numbers.forEach(element => console.log(element))

console.log("-- 6 --")
const countryToUpper = countries.map(element => element.toLocaleUpperCase())
console.log(countryToUpper)

console.log("-- 7 --")
const countryToLength = countries.map(element => element.length)
console.log(countryToLength)

console.log("-- 8 --")
const squareArray = numbers.map(element => element * element)
console.log(squareArray)

console.log("-- 9 --")
const nameToUpper = names.map(element => element.toLocaleUpperCase())
console.log(nameToUpper)

console.log("-- 10 --")
const prices = products.map(element => element.price)
console.log(prices)

console.log("-- 11 --")
const countriesWithLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesWithLand)

console.log("-- 12 --")
const countryCount = countries.filter((country) =>
  country.length == 6
)
console.log(countryCount)

console.log("-- 13 --")
const countryCountMore = countries.filter((country) =>
  country.length <= 6
)
console.log(countryCountMore)

console.log("-- 14 --")
const countryStartWithA = countries.filter((country) =>
  country.startsWith("F")
)
console.log(countryStartWithA)

console.log("-- 15 --")
const productsWithValues = products.filter((product) =>
  product.price !== '' && product.price !== ' '
)
console.log(productsWithValues)

console.log("-- 16 --")
function getStringLists(list) {
  const stringList = list.filter((list) => 
    typeof list === 'string' 
  )
  return stringList
}
let list = [1,5,'hello','string',false]
console.log(getStringLists(list))


console.log("-- 17 --")
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

console.log("-- 18 --")
const sentence = countries.reduce((sentence,country,index) =>{
  if (index == 0) {
    return country
  } else if (index === countries.length - 1) {
    return `${sentence}, and ${country} are north European countries`
  } else {
    return `${sentence}, ${country}`
  }
}, '')

console.log(sentence)

console.log("-- 19 --")
// 'some' checks to see if a condition is fufilled once and then stops
// 'every' checks to see if a condition is fufilled everytime

console.log("-- 20 --")
const areSomeLength = names.some((name) => name.length > 7)
console.log(areSomeLength)

console.log("-- 21 --")
const containLand = countries.every((country) => country.includes('land'))
console.log(containLand)

console.log("-- 22 --")
// 'find' gives the value 
// 'findIndex' gives the index of where that item is located
console.log("-- 23 --")
const firstCountrySix = countries.find((country) => country.length == 6)
console.log(firstCountrySix)

console.log("-- 24 --")
const firstCountrySixIndex = countries.findIndex((country) => country.length == 6)
console.log(firstCountrySixIndex)

console.log("-- 25 --")
const findNorway = countries.findIndex((country) => country.includes('Norway'))
console.log(findNorway)

console.log("-- 26 --")
const findRussia = countries.findIndex((country) => country.includes('Russia'))
console.log(findRussia)

console.log("-- Part 2 -- ")
console.log("-- 1 --")
const totalPrice = products
  .filter(product => product.price > 0)
  .map(product => product.price)
  .reduce((sum,price) => sum + price,0)

console.log(totalPrice)

console.log("-- 2 --")
const totelPriceReduce = products.reduce((sum, product) => {
  const price = parseFloat(product.price)
  if (!isNaN(price)) {
    return sum + price
  } else {
    return sum
  }
}, 0)
console.log(totelPriceReduce)

console.log("-- 3 --")


