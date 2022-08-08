// const films = ['Harry Potter', 'Supernatural', 'creed 2', 'Avengers']
// console.log(films)
// films.push('doktor strang')

// console.log(films.indexOf('spiderman'))


// const films = [
//     ['supernatural', 'Frieds', 'big bang theory'],
//     ['Avengers', 'Harry Potter', 'home alone']
// ]
// console.log(films[1][1])


// const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// const numbers2 = numbers.slice(2, 6)
// console.log(numbers2)
// console.log(numbers)
//  const array = ['a', 'b', 'c']
// console.log(array)
// array.push(1, 2, 3)


// const name = ['js', 'css', 'html']
// console.log(name['0'])


// const name = ['js', 'css', 'html']
// console.log(name['2'])


// const numbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// console.log(numbers)
// const numbers4 = numbers.splice(4, 1)
// console.log(numbers)

// const numbers5 = numbers.splice(0, 1, 0)
// console.log(numbers5)

// const numbers6 = numbers.splice(4, 0, 5, 6, 7)
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers)
// const numbers1 = numbers.splice(1, 2)
// console.log(numbers)


// const array = [1, 2, 3, 4, 5]
// console.log(array)

// const array2 = array.splice(1,3)
// console.log(array2)

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers)
// const numbers1 = numbers.splice(2, 0, 'a', 'b', 'c')
// console.log(numbers)


// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers)
// numbers.reverse()
// console.log(numbers)





// const person1 = {
//     name: 'Adilet',
//     age: 21,
//     gender:'Male'
// }
// const person2 = {
//     name: 'temir',
//     age: 19,
//     gener: 'male'
// }

// const fruit = 'banana'
// const fruits ={
//     fruit
// }
// console.log(fruit)

// if (true) {
//     const truit = 'apply'
//     console.log(fruit)
// }
// console.log(fruit)

// const neolabs = {
//     javascript: '16:00 - 18:00',
//     javascript: '18:30 - 20:30',
//     javascript: '9:30 - 11:30'
// }

// console.log(neolabs)

// neolabs.javascript = '12:00 - 14:00'
// neolabs.python = '18:30 - 20:30'

// neolabs.javascript ={
//     time: '16:00 - 18:00',
//     room: 'big room',
//     student: ['aibiyke', 'aiym', 'temir']
// }
// console.log(neolabs)
// console.log(neolabs.javascript.student[0])

// const person = {
//  name: 'Adilet',
//  age: 21,
//  gender:'Male'
// }

// console.log(Object.entries(person))

// const personArr = [
//     [ 'name', 'Adilet' ], 
//     [ 'age', 21 ],
//     [ 'gender', 'Male' ]
// ]

// console.log(Object.fromEntries(personArr))






// const categories = {
//     'бытовая техника': ['холодильник', 'тостер'],
//     'sport and relax': ['ball', 'hokeystick'],
// }


// const categoriesCorrect = [
//     {
//     name: 'бытовая техника',
//     items: [
//         {
//             name: 'fridg',
//             price: 400000,
//             sizi: '200x80x80',
//         }
//     ]
//   }
//]

// let salaries = {
//     'John': 100,
//     'Ann': 160,
//     'Pete': 130,
//   }
//   console.log(sumSalaires(salaries))
  
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
  
//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key]
//   }
  
//   console.log(sum)


  let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  }
  for (let key in menu) {
    if (typeof menu[key] == 'number') {
      menu[key] *= 2;
    }
  }
  console.log(menu)