// Exercise Part 1
console.log("----- Part 1 -----")

console.log("-- 1 --")
const dog = {}

console.log("-- 2 --")
console.log(dog)

console.log("-- 3 --")
const dog_modified = {
    name: "Athena",
    legs: 4,
    color: "Golden",
    age: 8,
    bark: function() {
        return "Woof Woof"
    }
}

console.log(dog_modified)

console.log("-- 4 --")
console.log(dog_modified.name)
console.log(dog_modified.legs)
console.log(dog_modified.color)
console.log(dog_modified.age)
console.log(dog_modified.bark())

console.log("-- 5 --")
dog_modified.breed = "Shiba Inu"
dog_modified.getDogInfo = function () {
    return `${dog_modified.name} is a ${dog_modified.age} year old ${dog_modified.breed}`
}
console.log(dog_modified.breed)
console.log(dog_modified.getDogInfo())

// Exercise Part 2
console.log("----- Part 2 -----")
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

console.log("-- 1 --")
let mostSkills = null;
let longestSkillCount = 0

for (const userID in users) {
    const user = users[userID]
    const skillsCount = user.skills.length

    if (skillsCount > longestSkillCount) {
        mostSkills = user
        longestSkillCount = skillsCount
    }
}

console.log(`The user with the most skills is ${mostSkills.email}`)
console.log(`${longestSkillCount}`)

console.log("-- 2 --")
for (const userID in users) {
    const user = users[userID]
    const points = user.points
    if (points >= 50) {
        console.log(user)
    }
}

let usersLoggedIn = 0
for (const userID in users) {
    const user = users[userID]
    const isLogged = user.isLoggedIn
    if (isLogged) {
        usersLoggedIn++
        console.log(`User ${user.email} is logged in`)
    }
}
console.log(`${usersLoggedIn} users are logged in`)

console.log("-- 3 --")
let MERN = ["MongoDB","Express","React","Node"]
for (const userID in users) {
  let stack = 0
  const user = users[userID]
  for (let i = 0; i < user.skills.length;i ++) {
    for (let j = 0; j < MERN.length;j++) {
      if (user.skills[i] == MERN[j]) {
        stack++
      }
    }
  }
  if (stack == 4) {
    console.log(`User ${user.email} has the MERN stack`)
  }
}

console.log("-- 4 --")
const copyUsers = Object.assign({}, users)

// Can add a new user by simply creating a new instance under a new name
const newUser = {
  email: 'marco@ahs.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node', 'Python'],
    age: 23,
    isLoggedIn: true,
    points: 60
}

copyUsers.Marco = newUser
console.log(copyUsers)
console.log(users)

console.log("-- 5 --")
const keys = Object.keys(users)
console.log(keys)

console.log("-- 6 --")
const values = Object.values(users)
console.log(values)

// Exercise Part 3
console.log("----- Part 3 -----")

console.log("-- 1 --")
const personAccount = {
  firstName: "Marco",
  lastName: "Gonzalez",
  incomes: [{income: 100, description: "Stocks"}, {income:1500, description: "Paystub"}],
  expenses: [{expense: 15, description: "Stocks"}, {expense:150, description: "Paystub"}],
  totalIncome: function() {
    let total = 0
    for (const income of this.incomes) {
      total += income.income
    }
    return parseInt(total)
  },
  totalExpenses: function() {
    let total = 0
    for (const expense of this.expenses) {
      total += expense.expense
    }
    return parseInt(total)
  },
  accountInfo: function() {
    return `Income: $${this.totalIncome()}, Expenses: $${this.totalExpenses()}`
  },
  addIncome: function(incoming,description) {
    this.incomes.push({income: incoming,description:description})
  },
  addExpense: function(cost,description) {
    this.expenses.push({expense: cost,description:description})
  },
  accountBalace: function() {
      return `You have $${this.totalIncome() - this.totalExpenses()}`
  },
}
console.log(personAccount)
console.log(personAccount.totalIncome())
console.log(personAccount.totalExpenses())
console.log(personAccount.accountBalace())
console.log("-------------")
personAccount.addIncome(1000,"Gift")
personAccount.addIncome(750,"Scholarship")
personAccount.addExpense(100,"Clothes")
personAccount.addExpense(75,"Dinner")
console.log(personAccount)
console.log(personAccount.accountBalace())

console.log("-- 2 --")

const users_3 = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function addUser(newUser) {
  const existingUser = users_3.find(user => user.email === newUser.email)
  if (existingUser) {
    console.log("User already exists")
    return
  }
  newUser._id = generateId()
  newUser.createdAt = new Date().toLocaleString()
  newUser.isLoggedIn = false
  users_3.push(newUser)
}

function generateId() {
  let id = ''
  let characters_list = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0; i <= 5; i++) {
    id += characters_list[Math.floor(Math.random() * characters_list.length)]
  }
  return id
}

function signIn(email) {
  const existingUser = users_3.find(user => user.email === email)
  if (existingUser) {
    for (const users of users_3) {
      if (users.email === email) {
        if (users.isLoggedIn) {
          console.log("You are already logged in")
          return
        } else {
          users.isLoggedIn = true
          console.log("You have been logged in")
        }
      }
    }
    console.log(users_3)
  } else {
    console.log("You do not exist")
    return
  }
}

let newUserAdded = {
  _id: '',
  username: 'Marco',
  email: "mgonz@gmail.com",
  password: '12frgt'
}

let newUserAddedError = {
  _id: '',
  username: 'Lucas',
  email: "thomas@thomas.com",
  password: '41fs32'
}

addUser(newUserAdded)
addUser(newUserAddedError)

signIn("mgonz@gmail.com")
signIn("lucas@gmail.com")
signIn("brook@brook.com")

console.log(users_3)

console.log("-- 3 --")
function rateProduct(id,userID,rating) {
  const existingProduct = products.find(product => product._id === id)
  if (existingProduct) {
    for (const product of products) {
      if (product._id === id) {
        product.ratings.push({userId: userID, rate: rating})
        console.log("You have rated the product")
      }
    }
  } else {
    console.log("Product does not exist")
    return
  }
}

function averageRating(id) {
  const existingProduct = products.find(product => product._id === id)
  let average = 0
  if (existingProduct) {
    for (const product of products) {
      if (product._id === id) {
        let rating = 0
        for (const rate of product.ratings) {
          rating += rate.rate
        }
        average = Math.round(rating / product.ratings.length)
      }
    }
    console.log(`The average rating of this product is ${average} stars`)
  } else {
    console.log("Product does not exist")
    return
  }
}

rateProduct("aegfal","fg12cy",5)
rateProduct("aeggse","fg12cy",5)
console.log("-------")
averageRating("eedfcf")
console.log(products)

console.log("-- 4 --")
function likeProduct(id,userID) {
  const existingProduct = products.find(product => product._id === id)
  if (existingProduct) {
    const userLiked = existingProduct.likes.indexOf(userID)
    if (userLiked !== -1) {
      console.log("Already liked this product, removing like")
      existingProduct.likes.splice(userLiked, 1)
    } else {
      console.log("You have liked this product")
      existingProduct.likes.push(userID)
    }
  } else {
    console.log("This product does not exist")
  }
}

likeProduct("eedfcf","fg12cy")
console.log(products)