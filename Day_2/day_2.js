// Exercise - Level 1

// 1. Assign value
let challenge = '30 Days of JavaScript'

// 2. Print to console
console.log(challenge)

// 3. Print length of the string
console.log(challenge.length)

// 4. Upper Case
console.log(challenge.toUpperCase())

// 5. Lower Case
console.log(challenge.toLowerCase())

// 6. Cut first word
console.log(challenge.substring(3))

// 7. Cut out all but first word
console.log(challenge.substring(1,3))

// 8. Includes
console.log(challenge.includes('Script'))

// 9. Split into Array
console.log(challenge.split(''))

// 10. Split 
console.log(challenge.split(' '))

// 11. Split at comma and make array
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))

// 12. Change to 30 days of python
console.log(challenge.replace("JavaScript", "Python"))

// 13. What is char at index 15
console.log(challenge.charAt(15))

// 14. What is Charater code of J
console.log(challenge.charCodeAt("J"))

// 15. Use indexOf to determine first postion of "a"
console.log(challenge.indexOf('a'))

// 16. Use lastIndexOf for last occurence of "a"
console.log(challenge.lastIndexOf('a'))

// 17. Use index of to find first occurence of "because"
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf("because"))

// 18. Use lastIndexOf to find last occurence
console.log(sentence.lastIndexOf('because'))

// 19. Use search to find 'because'
console.log(sentence.search("because"))

// 20. Use trim to eliminate white space
let white_space = ' 30 Days Of JavaScript '
console.log(white_space.trim(' '))

// 21. Starts with (True)
console.log(challenge.startsWith('30'))

// 22. Ends with (True)
console.log(challenge.endsWith('Script'))

// 23. Match all "a"
console.log(challenge.match('a'))

// 24. Use Concat to merge two strings
let first_string = "30 Days of"
let second_string = " Javascript"

console.log(first_string + second_string)

// 25. 
console.log(challenge.repeat(2))

// Exercise - Level 2