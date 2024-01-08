// Answer 1
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  const originalString = 'Hello, World!';
  const reversedString = reverseString(originalString);
  document.write(reversedString);
  
// Answer 2 :Count the number of vowels in a given string.
  function countVowels(str) {
  
    const lowerStr = str.toLowerCase();
  
    let vowelCount = 0;
    for (let i = 0; i < lowerStr.length; i++) {
      if ('aeiou'.includes(lowerStr[i])) {
        vowelCount++;
      }
    }
    return vowelCount;
  }
  const inputString = 'Naveen Asghar';
  const result = countVowels(inputString);
  document.write(`Number of vowels in "${inputString}": ${result}`);

//   answer3  Convert the first letter of each word in a sentence to uppercase.

function capitalizeFirstLetter(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedSentence = capitalizedWords.join(' ');
    return capitalizedSentence;
  }
  const inputSentence = 'hello world!.';
  const result1 = capitalizeFirstLetter(inputSentence);
  console.log(`Capitalized sentence: ${result1}`);

//   Answer 4 Check if a string is a palindrome
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
  }

  const palindromeString = 'A man, a plan, a canal, Panama!';
  const nonPalindromeString = 'Hello, World!';
  
  console.log(`"${palindromeString}" is a palindrome: ${isPalindrome(palindromeString)}`);
  console.log(`"${nonPalindromeString}" is a palindrome: ${isPalindrome(nonPalindromeString)}`);
  
  
//   Answer 5 Find the sum of all positive numbers in an array.
function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  const numbers = [1, -2, 3, -4, 5];
  const result = sumOfPositiveNumbers(numbers);
  console.log(`Sum of positive numbers: ${result}`);
//   Answer 6 Find the index of the first occurrence of a specific element in an array.
function indexOfElement(arr, element) {
    return arr.indexOf(element);
  }
  const numbers2 = [1, 2, 3, 4, 5];
  const targetElement = 3;
  
  const index = indexOfElement(numbers2, targetElement);
  
  if (index !== -1) {
    console.log(`The first occurrence of ${targetElement} is at index ${index}.`);
  } else {
    console.log(`${targetElement} is not found in the array.`);
  }
  
//   Answer 7 Remove all duplicates from an array without built-in methods.
  function removeDuplicates(arr) {
    const uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  const arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 1, 7];
  const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
  
  console.log("Array with duplicates:", arrayWithDuplicates);
  console.log("Array without duplicates:", arrayWithoutDuplicates);

//   answer 8 Sort the array in ascending and descending without built-in methods.
  function bubbleSortAscending(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  bubbleSortAscending(unsortedArray);
  
  console.log("Array sorted in ascending order:", unsortedArray);
//   answer 9 Print all even numbers between 1 and 20 using a while loop.
let number = 2;

while (number <= 20) {
  console.log(number);
  number += 2; 
}
// answer 10  Calculate the factorial of a number using a do-while loop.
function calculateFactorial(n) {
    let factorial = 1;
    let i = 1;
  
    do {
      factorial *= i;
      i++;
    } while (i <= n);
  
    return factorial;
  }
  const number3 = 5;
  const result = calculateFactorial(number3);
  
  console.log(`The factorial of ${number3} is: ${result}`);
// answer 11 : Iterate through the properties of an object using a for-in loop.
const person = {
    name: 'Asma',
    age: 30,
    city: 'Canada',
    occupation: 'Engineer'
  };
  
  for (let key in person) {
    if (person.hasOwnProperty(key)) {
      console.log(`${key}: ${person[key]}`);
    }
  }
//   answer 12 : Loop through an array using a for-of loop and double each element.
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

for (const number of numbers) {
  doubledNumbers.push(number * 2);
}

console.log("Original array:", numbers);
console.log("Doubled array:", doubledNumbers);
// answer 13 Check if a number is even or odd and return a corresponding message.
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return `${number} is even.`;
    } else {
      return `${number} is odd.`;
    }
  }
  const numberToCheck = 7;
  const result = checkEvenOrOdd(numberToCheck);
  
  console.log(result);
// answer 14 Find the maximum of three numbers using nested ternary operators.
function findMaximum(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
  }
  const num1 = 10;
  const num2 = 5;
  const num3 = 8;
  const maximum = findMaximum(num1, num2, num3);
  console.log(`The maximum of ${num1}, ${num2}, and ${num3} is: ${maximum}`);
 
// answer 15 if a year is a leap year or not.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  // Example usage
  const yearToCheck = 2024;
  const result = isLeapYear(yearToCheck);
  
  if (result) {
    console.log(`${yearToCheck} is a leap year.`);
  } else {
    console.log(`${yearToCheck} is not a leap year.`);
  }
  
  
  

  
  


  
  