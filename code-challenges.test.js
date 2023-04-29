// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe ("objectArray", () =>{
  
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]

  it ("takes an array of objects and return an array with a sentence with the name capitalized", () => {
  
    expect(objectArray(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])  
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// FAIL  ./code-challenges.test.js
// objectArray
//   ✕ takes an array of objects and return an array with a sentence with the name capitalized
// ● objectArray › takes an array of objects and return an array with a sentence with the name capitalized
//   ReferenceError: objectArray is not defined

// b) Create the function that makes the test pass.

// Pseudo Code
// Create a function called objectArray
// function will take an array of objects as an input
// Map over each element(object) of the input array 
// for each element(object) in array make a new object with object's key=name capitalized
    // Split the name value in an array of words exp object.name = [ford, prefect]
    // toUppercase the first letter of each word
    // Join the array of words into a string ('')
// 

const objectArray = (arr) => {
  const capitalizedArr = arr.map(obj => {
    return {...obj, name: obj.name.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }).join(' ')
    }
    }) 
  return capitalizedArr.map(({name, occupation})=> `${name} is ${occupation}.`)
}




// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainSort",() => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]    
  it("filter the integers from an array, and retrive remainder after dividing by three", () => {
    expect(remainSort(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainSort(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
} )

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-6-assessment-salas89jl/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//     ✕ filter the integers from an array, and retrive remainder after dividing by three

//   ● remainSort › filter the integers from an array, and retrive remainder after dividing by three

//     ReferenceError: remainSort is not defined

// b) Create the function that makes the test pass.

// Pseudo Code:
// 1. Create a function named reaminSort
// 2. Input will be an array 
// 3. copy array into new variable to filter all values that are an Integer.
// 4. Once integers have been filtered use .map to access all numbers and modulo by 3.
// 5. Return the numArrray.

remainSort = (arr) => {
 numArray = arr.filter(num => Number.isInteger(num)).map(num => num % 3)
  return numArray
}
// 


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("sumCube", () => {
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  it("takes in numsArray and sums up all numbers and then performs a cube operation", () => {
    expect(sumCube(cubeAndSum1)).toEqual(99)
    expect(sumCube(cubeAndSum2)).toEqual(1125)
  })
})

// yarn run v1.22.19
// warning package.json: No license field
// $ /Users/learnacademy/Desktop/week-6-assessment-salas89jl/node_modules/.bin/jest
//  FAIL  ./code-challenges.test.js
//   sumCube
//     ✕ takes in numsArray and sums up all numbers and then performs a cube operation

// b) Create the function that makes the test pass.


// Pseudo Code:
// 1. Create a function named sumCube.
// 2. Input: function will take an array of numbers 
// 3. function will need to access all of the numbers in the array and store them in a variable total
// 4. Use .map to cycle through each value and do a 1expo3
// 5. Use .reduce to access and add up all the modified values in the new array. 
// 6. Return the total

sumCube = (arr) => {
  total = arr.map((num) => { return num * num * num }).reduce((i,i2) => { return i + i2 } )
  return total
}