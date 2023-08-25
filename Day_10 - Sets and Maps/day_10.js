import countriesArray from '../data/countries_data.js'

console.log("-- Part 1 -- ")
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway','Canada','Usa']

console.log("-- 1 --")
const emptySet = new Set()
console.log(emptySet)

console.log("-- 2 --")
const numberSet = new Set()
for (let i = 0; i <= 10; i++) {
  numberSet.add(i)
}
console.log(numberSet)

console.log("-- 3 --")
numberSet.delete(6)
console.log(numberSet)

console.log("-- 4 --")
numberSet.clear()
console.log(numberSet)

console.log("-- 5 --")
const stringSet = new Set()
countries.forEach(index => {
  stringSet.add(index)
})
console.log(stringSet)

console.log("-- 6 --")
const country = new Map()
countries.forEach(index => {
  country.set(index, index.length)
})
console.log(country)

console.log("-- Part 2 -- ")
console.log("-- 1 --")
let c = [...a, ...b]
let C = new Set(c)
console.log(C)

console.log("-- 2 --")
let A = new Set(a)
let B = new Set(b)

let d = a.filter((num) => B.has(num))
let D = new Set(d)
console.log(D)

console.log("-- 3 --")
let e = a.filter((num) => !B.has(num))
let E = new Set(e)
console.log(E)

console.log("-- Part 3 -- ")
console.log("-- 1 --")

let countriesArrayCopy = countriesArray
console.log(countriesArrayCopy)
let countrySet = new Set()
let language_array = []
countriesArrayCopy.forEach((index) => {
  for (const languages of index.languages) {
    language_array.push(languages)
    countrySet.add(languages)
  }
})
console.log(countrySet)
console.log(countrySet.size)

console.log("-- 2 --")

function mostSpokenLanguages(array, count) {
  const counter = {}
  const counts = []
  let language_array = []
  array.forEach((index) => {
    for (const languages of index.languages) {
      language_array.push(languages)
    }
  })

  for (const l of countrySet) {
    const filteredLang = language_array.filter((lng) => lng === l)
    counts.push({Language: l,counter: filteredLang.length})
  }
  counts.sort((a,b) => {
    let A = a.counter
    let B = b.counter
    if (A < B) {
      return 1
    } else if (A > B) {
      return -1
    } else {
      return 0
    }
  })
  return counts.slice(0,count)
}

console.log(mostSpokenLanguages(countriesArrayCopy,10))  
console.log(mostSpokenLanguages(countriesArrayCopy, 3))