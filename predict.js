const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //Telsa
console.log(otherRandomCar) //Skip the first car and print Mercedes

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name); //name results in a error
console.log(otherName); //this would print out Elon

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//first = 2, second = 5, third == 2 
console.log(first == second);// false
console.log(first == third); // true 

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
// 'value'
// [1, 5, 1, 8, 3, 3]
//1
// 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);




