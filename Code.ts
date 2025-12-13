// Finding largest element.

let arr =[1,5,7,9,3]

function findLargest(val){
    let firstLargest = val[0]
    for(let i=0;i<=val.length-1;i++){
        if(val[i]>firstLargest){
            firstLargest = val[i]
        }
    }
    return firstLargest
}
console.log(findLargest(arr))



--------------------------------------------------------
// Finding second largest element.

let arr =[1,5,7,9,3]

function findSecondLargest(val){
    let firstLargest = val[0]
    let secondLargest = val[0];
    for(let i=0;i<=val.length-1;i++){
        if(val[i]>firstLargest){
            secondLargest = firstLargest;
            firstLargest = val[i]
        }
    }
    return secondLargest
}
console.log(findSecondLargest(arr))


-------------------------------------------------------

// Finding smallest element.

let arr =[1,5,7,9,3]

function findSmallest(val){
    let firstSmallest = val[0]
    for(let i=0;i<=val.length-1;i++){
        if(val[i]<firstSmallest){
            firstSmallest = val[i]
        }
    }
    return firstSmallest
}
console.log(findSmallest(arr))


------------------------------------------------------

// Finding even and odd element.



let arr =[1,5,7,9,3,2,8]

function findEvenOdd(val){
    let even = [];
    let odd = [];
    for(let i=0;i<=val.length-1;i++){
        if(val[i] % 2 ===0){
            even.push(val[i])
        }else{
            odd.push(val[i])
        }
    }
    return {evenElement: even, oddElement: odd}
}
console.log(findEvenOdd(arr))

----------------------------------------------------------------

// Flatten array

 const nestedArray = [1, [2, 3], [4, [5, 6]]];
 const flatArray = nestedArray.flat(Infinity); // `Infinity` flattens all levels
 console.log(flatArray); // [1, 2, 3, 4, 5, 6]

 -------------------------------------------------------------

function flattenArray(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item)); // Recursively flatten nested arrays
    } else {
      result.push(item);
    }
  }
  return result;
}

// Example usage
const nestedArray = [1, [2, 3], [4, [5, 6, [4, 8, 9, [8, 9, 123]]]]];
console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6]


-----------------------------------------------------------------

// Frequency of element

function countOccurrences(arr) {
  const counts = {};
  for (const num of arr) {
    if (counts[num]) {
      counts[num] = counts[num] + 1;
    } else {
      counts[num] = 1;
    }
  }
  return counts;
}

// Example usage
const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = countOccurrences(arr);

console.log(counts); // { '2': 5, '4': 1, '5': 3, '9': 1 }



-----------------------------------------------------------------

// Memoization 

const cache = {};
function calculation(a, b) {
  console.log("calling");
  let result = a + b;
  return result;
}

function memory(a, b) {
  const key = a + ":" + b;
  if (!cache[key]) {
    const result = calculation(a, b);
    cache[key] = result;
    return result;
  } else {
    return cache[key];
  }
}

console.log(memory(5, 6));

----------------------------------------------------------------
// Fibonacci Series


function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
}
console.log(fibonacci(10)); // [0,1,1,2,3,5,8,13,21,34]


---------------------------------------------------------------

Factorial

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

-------------------------------------------------------------

Palindrome Check

function isPalindromeIgnoreCase(str) {
  const clean = str.toLowerCase();
  return clean === clean.split('').reverse().join('');
}

console.log(isPalindromeIgnoreCase('Madam'));     // true
console.log(isPalindromeIgnoreCase('RaceCar'));   // true
console.log(isPalindromeIgnoreCase('Hello'));     // false

------------------------------------------------------------

 two sums program.

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}


-----------------------------------------------------

For creating dummy api from website :- https://mocki.io/
UI library :- https://uiverse.io/checkboxes












