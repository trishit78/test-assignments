/*
  Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
*/

function countVowels(str) {
  // Your code here
  const vowel = ['a','e','i','o','u','A','E','I','O','U'];
  let count=0;
  for(let i=0;i<str.length;i++){
    let char = str.charAt(i);
    console.log('char',char)
    for(let j=0;j<vowel.length;j++){
      if(char==vowel[j])
        {
          count++;
          break;
        }
    }
  }
  console.log(count)
  return count;
}

module.exports = { countVowels };



