/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let total = {}
  let ans=[]
  for(let t of transactions){
    let cat = t.category
    let price = t.price
    if(total[cat]){
      total[cat] += price
    }else{
      total[cat] = price
    }

  }
console.log(total)
  for(let key in total){
    ans.push({"category":key,"totalSpent":total[key]})
  }

  console.log(ans)
  return ans
}

module.exports = calculateTotalSpentByCategory;