/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/
function valid(str){
  const validstr = "0123456789+-*/()"
  for(let ch of str){
    if(!validstr.includes(ch)) return false
  }
  return true
}
class Calculator {
  constructor(){
    this.result = 0
  }
  add(n){
    this.result= this.result +n
    console.log(`Addition is ${this.result}`)
  }
  subtract(n){
    this.result = this.result -n
    console.log(`Subtract is ${this.result}`)
  }
  multiply(n){
    this.result = this.result *n
    console.log(`Multiply is ${this.result}`)
  }
  divide(n){
    this.result = this.result /n
    console.log(`Subtract is ${this.result}`)
  }
  clear(){
    this.result =0;
    console.log(`The result is ${this.result}`)
  }
  getResult(){
    console.log(`The value result is ${this.result}`)
  }
  calculate(str){
    str = str.split(' ').join('')
    //console.log(str)
    if(!valid(str)) {
      console.log('invalid')
      return
    }
    this.result = Function(`return ${str}`)()
    console.log(ans)
  }

 }

const c1 = new Calculator()
//c1.calculate(`10 +   2 *    (   6 - (4 + 1) / 2) + 7`)

c1.calculate(`5 + abc`)




module.exports = Calculator;