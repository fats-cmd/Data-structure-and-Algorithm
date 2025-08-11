// // // const students = [
// // //   "John",
// // //   "Jane",
// // //   "Jill",
// // //   "Jack",
// // //   "Jenny",
// // //   "Joe",
// // //   "Jasmine",
// // //   "Jordan",
// // //   "Julia",
// // //   "Jim",
// // // ];
//
// // // const getStudent = (arr, i) => arr[i];
// // // const getStudentName = (arr, i) => {
// // //   return arr[i] ? `Found: ${arr[i]}` : `Not Found: Index ${i}`;
// // // };
//
// // // console.log(getStudent(students, 0)); // Output: Found: Jim
//
// // // // function findStudentName(allStudents, studentName) {
// // // //   for (let i = 0; i < allStudents.length; i++) {
// // // //     if (allStudents[i] === studentName) {
// // // //       return `Found: ${studentName}`;
// // // //     }
// // // //   }
// // // // }
// // // // function findStudentName(allStudents, studentName) {
// // // //   return allStudents.includes(studentName)
// // // //     ? `Found: ${studentName}`
// // // //     : `Not Found: ${studentName}`;
// // // // }
//
// // // //DATA STRUCTURES
// // // //1. ARRAY
//
// // //CREATING A CUSTOM ARRAY
// // class CustomArray {
// //   constructor() {
// //     this.length = 0;
// //     this.items = [];
// //   }
// //   push(items) {
// //     this.items[this.length] = items;
// //     this.length++;
// //     return this.length;
// //     // return `Added: "........." ${items}`;
// //   }
// //   get(index) {
// //     // this.items[this.length] = index;
// //     return this.items[index];
// //   }
// //   pop() {
// //     const lastItem = this.items[this.length - 1];
// //     delete this.items[this.length - 1];
// //     this.length--;
// //     return lastItem === undefined ? undefined : lastItem;
// //   }
// //   shift() {
// //     const firstItem = this.items[0];
// //     for (let i = 0; i < this.length - 1; i++) {
// //       this.items[i] = this.items[i + 1];
// //     }
// //     delete this.items[this.length - 1];
// //     this.length--;
// //   }
// // }
// // const customArray = new CustomArray();
//
// // customArray.push("Ronald Okpara");
// // customArray.push("Donald Okpara");
// // customArray.push("Joel  Okpara");
// // customArray.push("Titi Okpara");
// // customArray.push("UgoChuckwu Okpara");
//
// // console.log(customArray.shift(1));
//
// // // customArray.pop(0); // Output: John
// // // console.log(customArray); // Output: { 0: 'John', 1: 'Doe', 2: 'Smith' }
// // // console.log(customArray.get(1)); // Output: Doe
// // // console.log(customArray.get(2)); // Output: Smith
//
// // // // problem 1: Reverse a string
//
// // function reverseString(str) {
// //   let result = "";
// //   for (let i = str.length - 1; i >= 0; i--) {
// //     result = result + str[i];
// //   }
// //   return result;
// // }
// // console.log(reverseString("hello world"));
//
// // function palindrome(str) {
// //   const reversed_String = reverseString(str);
// //   return reversed_String === str
// //     ? `this is a palindrome`
// //     : `this is not a palindrome`;
// // }
// // console.log(palindrome("hello world"));
//
// // //function to reverse string with destructuring
// // // function reverseStringDestructuring(str) {
// // //   const strArray = [...str];
// // //   return strArray.reverse().join("");
// // // }
// // // console.log(reverseStringDestructuring("hello world"));
//
// // // code to find the largest number in an array
//
// // //function to find the largest number in an array
// // class Solution {
// //   largestElement(nums) {
// //     let largest = nums[0];
// //     for (let i = 1; i < nums.length; i++) {
// //       if (nums[i] > largest) {
// //         largest = nums[i];
// //       }
// //     }
// //     return largest;
// //   }
// // }
// // const solution = new Solution();
// // console.log(solution.largestElement([1, 2, 3, 4, 5])); // Output: 5
//
// // //function to reverse an integer
// // function reverseInteger(num) {
// //   let reversed_integer = "";
// //   let numStr = num.toString();
// //   for (let i = numStr.length - 1; i >= 0; i--) {
// //     reversed_integer += numStr[i];
// //   }
// //   return reversed_integer;
// // }
// // let reversedInteger = reverseInteger("12345678901");
// // console.log(parseInt(reversedInteger));
//
// // //function to capitalize the first letter of a string
// // function capitalizeString(str) {
// //   let capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);
// //   return capitalizedString;
// // }
//
// // console.log(capitalizeString("ronald Okpara "));
//
// // // FizzBuzz Challenge
// // function fizzBuzz(n) {
// //   for (let i = 1; i <= n; i++) {
// //     // switch (true) {
// //     //   case i % 3 === 0 && i % 5 === 0:
// //     //     console.log("FizzBuzz");
// //     //     break;
// //     //   case i % 3 === 0:
// //     //     console.log("Fizz");
// //     //     break;
// //     //   case i % 5 === 0:
// //     //     console.log("Buzz");
// //     //     break;
// //     //   default:
// //     //     console.log(i);
// //     // }
// //   }
// //   for (let i = 1; i <= n; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //       console.log("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //       console.log("Fizz");
// //     } else if (i % 5 === 0) {
// //       console.log("Buzz");
// //     } else {
// //       console.log(i);
// //     }
// //   }
// // }
// // fizzBuzz(15);
//
// // // Functon to check if an array is sorted
// // function isArraySorted(arr) {
// //   for (i = 0; i < arr.length - 1; i++) {
// //     if (arr[i] > arr[i + 1]) {
// //       return false;
// //     }
// //   }
// //   return true;
// // }
//
// // console.log(isArraySorted([1, 6, 3, 4, 5])); // Output: true
//
// // //function to check max profit
// // function maxProfit(prices) {
// //   let highestPrice = prices[0];
// //   let lowestPrice = prices[0];
//
// //   for (let i = 1; i < prices.length; i++) {
// //     // console.log(prices[i]);
// //     if (lowestPrice > prices[i]) {
// //       lowestPrice = prices[i];
// //     }
//
// //     if (highestPrice < prices[i]) {
// //       highestPrice = prices[i];
// //     }
// //   }
// //   return highestPrice - lowestPrice;
// // }
// // let profit = maxProfit([7, 1, 5, 3, 6, 4]);
// // console.log(`profit made is ${profit}`);
//
// // console.log(Infinity > 1e308); // true
// // console.log(-Infinity < -1e308); // true
//
// // // correct way to find maxProfit
// // function maxProfit(prices) {
// //   let minPrice = prices[0];
// //   let maxProfit = 0;
//
// //   for (let i = 1; i < prices.length; i++) {
// //     if (prices[i] < minPrice) {
// //       minPrice = prices[i];
// //     } else if (prices[i] - minPrice > maxProfit) {
// //       maxProfit = prices[i] - minPrice;
// //     }
// //   }
// //   return maxProfit;
// // }
//
// // console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
//
// // //function to make an array into chunks
//
// // /**
// //  * Splits an array into chunks of a specified size.
// //  * @param {Array} arr - The array to be chunked.
// //  * @param {number} size - The size of each chunk.
// //  * @returns {Array[]} An array containing the chunked subarrays.
// //  */
// // function chunkArray(arr, size) {
// //   const chunkedArray = [];
// //   for (let i = 0; i < arr.length; i += size) {
// //     chunkedArray.push(arr.slice(i, i + size));
// //   }
// //   return chunkedArray;
// // }
//
// // let result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
//
// // console.log(result);
//
// // // two sums
// // function twoSum(nums, target, size) {
// //   for (let i = 0; i < nums.length; i++) {
// //     if (nums[i] + nums[i + 1] === target) {
// //       return [i, i + 1];
// //     } else {
// //       nums[i] = nums[i + 1];
// //     }
// //   }
// // }
// // console.log(twoSum([3, 7, 4, 5, 6, 99, 2, 15, 66], 9)); // Output: it should return the indices of the two numbers that add up to the target value
// // // but what if there are multiple pairs that add up to the target value?
// // // In that case, we can return all pairs or just the first one found.
// // // how do i return all pairs that add up to the target value?
// // // using that method increases the time complexity to O(n^2) because we have to check all pairs.
// // // // To optimize this, we can use a hash map to store the indices of the numbers we have seen so far.
// // // i dont know how to use a hash map in javascript
// // // using a hash map in javascript is easy, we can use an object or a Map to store the indices of the numbers we have seen so far.
// // // do it and explain with comment unfamiliar terms.
// // function twoSum(nums, target) {
// //   const numMap = new Map(); // Create a map to store numbers and their indices
//
// //   for (let i = 0; i < nums.length; i++) {
// //     const complement = target - nums[i]; // Calculate the complement of the current number
//
// //     if (numMap.has(complement)) {
// //       // Check if the complement exists in the map
// //       return [numMap.get(complement), i]; // Return the indices of the two numbers
// //     }
//
// //     numMap.set(nums[i], i); // Store the current number and its index in the map
// //   }
//
// //   return []; // Return an empty array if no pair is found
// // }
//
// // console.log(twoSum([3, 7, 4, 5, 6, 99, 2, 15, 66], 9)); // Output: [0, 2] (indices of numbers that add up to 9)
//
// let map = {};
// map["name"] = "Alice"; // "name" is hashed to an index internally. what does this mean?
// console.log(map["name"]); // Output: Alice
// //Hash Maps Data Structure
// let phoneBook = new Map();//create the hash map
// phoneBook.set("Alice", "123-4567");n
// phoneBook.set("Bob", "987-6543");
//
// console.log(phoneBook.get("Alice")); // Output: 123-4567
// phoneBook.set("Alice", "123-4567");
// phoneBook.set("Bob", "987-6543");
//
// // console.log(phoneBook.get("Alice")); // Output: 123-4567
//
// // let userMap = new Map();
// // userMap.set("alice", { age: 25, city: "Lagos" });
// // userMap.set("bob", { age: 30, city: "Abuja" });
//
// // console.log(userMap.get("alice")); // { age: 25, city: "Lagos" }
//
// // list hash map methods in comment format
// // // Hash Map Methods
// // // set(key, value) - Adds a key-value pair to the map.
// // // get(key) - Retrieves the value associated with the key.
// // // has(key) - Checks if the map contains the specified key.
// // // delete(key) - Removes the key-value pair from the map.
// // // clear() - Removes all key-value pairs from the map.
// // // size - Returns the number of key-value pairs in the map.
// // // keys() - Returns an iterator for the keys in the map.
// // // values() - Returns an iterator for the values in the map.
// // // entries() - Returns an iterator for the key-value pairs in the map.
// // // forEach(callback) - Executes a provided function once for each key-value pair in the map.
class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

// create a custom linked list
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // Method to add a new node to the end of the list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
//   pop method to remove a node from the linkedLlist
  pop(value) {
    let tempNode = this.head;
    let prevNode = this.head;
  //   using a while loop
    while(tempNode.next){
      tempNode = this.head.next;
      prevNode = tempNode;
      this.tail = prevNode
      this.tail.next = null;
    }
      this.length--;

    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return tempNode;

  }

  //Unshift method
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift(value){
    let headNode = this.head;
    this.head = this.head.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return headNode;
  }
  // get the first element
  getFirst(){
    return this.head;
  }

//   get last element
  getLast(){
    let headNode = this.head;
    if(!this.head){
      this.head = null;
      this.tail = null;
    }
    while(headNode.next){
      headNode = headNode.next;
    }
    this.length--;
    return headNode;
  }
//   function to get element by index
  getByIndex(index){
    let counter = 0;
    let headNode = this.head;
    while(headNode){
      if(counter === index){
        return headNode
      }
      counter++
      headNode = headNode.next
    }
    return null
  }

  set(index, value) {
    const node = this.getByIndex(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }
  insertAt(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    const newNode = new Node(value);
    let prevNode = this.getByIndex(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
}
const linkedList = new LinkedList(1);
linkedList.push(2);
// linkedList.push(3);
// linkedList.unshift(4);
// linkedList.push(5);
// linkedList.pop(5);
// linkedList.shift(1);
// linkedList.pop(3)
// linkedList.get(2);
console.log(linkedList.set(1, 20));
console.log(linkedList.insertAt(2, 30));
console.log(linkedList);



