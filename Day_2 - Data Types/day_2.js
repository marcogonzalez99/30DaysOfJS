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
console.log('-------Part 2--------')

// 1. Quote
let quote = 'There is no exercise better for the heart than reaching down and lifting people up.'

console.log(`The quote ${quote} by John Holmes teaches us to help one another`)

// 2. Full Quote
const paragraph = "Love is not patronizing and charity isn't about pity, it \
is about love. Charity and love are the same -- with \
charity you give love, so don't just give money but reach \
out your hand instead."

console.log(paragraph)

// 3. Check is typeOf 10 is 10
console.log('10' == 10)
let false_number = '10'
real_number = parseInt(false_number)
console.log(real_number == 10)

// 4. ParseInt
let float = '9.8'
let new_float = parseFloat(float)
console.log(float == new_float)

// 5. Check if "on" is found
let first_word = 'python'
let second_word = 'jargon'

console.log(first_word.includes('on') && second_word.includes('on'))

// 6. Check is "jargon" is in the sentence

let part_2_sentence = 'I hope this course is not full of jargon'
console.log(part_2_sentence.includes('jargon'))

// 7. Random number bt 0 and 100
console.log(Math.random() * 101)

// 8. Random nnumber between 50 and 100
console.log(50 + (Math.random() * 51))

// 9. Rnaomd number between 0 and 255
console.log(Math.random() * 256)

// 10. Access JS string characters
console.log(Math.random().toString(36).slice(2))

// 11. Console to print characters
console.log(
    "1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125"
    )

// 12. Splice
let sentence_to_splice = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence_to_splice.substr(31,23))

// Exercise - Level 3
console.log('-------Part 3--------')

// 1. Count instances
let third_sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /love/gi
console.log(third_sentence.match(pattern))

// 2. Count instances again
let patternTwo = /because/gi
console.log(sentence_to_splice.match(patternTwo))

// 3. Cleaning up
const clean_up = `%I $am@% a %tea@cher%, &and& I lo%#ve 
%te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding 
as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching 
m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s 
mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript 
&is al@so $the $resu@lt of &love& of tea&ching`

console.log(clean_up.replace(/#|@|&|%|\$/g,''))

// 4. Calculating income
let money_text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx = /\d+/g
console.log(money_text.match(regEx))
let money_values = money_text.match(regEx)
let value1 = parseInt(money_values[0])
let value2 = parseInt(money_values[1])
let value3 = parseInt(money_values[2])


console.log((value1 + value3) * 12 + value2)
