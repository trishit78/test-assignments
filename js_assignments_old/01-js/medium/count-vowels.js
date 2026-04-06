/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowel(str){
  const vowel = ['a','e','i','o','u','A','E','I','O','U'];
  for(let i=0;i<vowel.length;i++){
    if(str===vowel[i]) return true
  }
  return false
}

function countVowels(str) {
    // Your code here
    let cnt =0
    for(let i=0;i<str.length;i++){
      let char = str.charAt(i);
      if(isVowel(char)){
        cnt++
      }
    }
    return cnt
}

module.exports = countVowels;