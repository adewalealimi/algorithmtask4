/*
1. Write a function named "convertFahrToCelsius" that takes a single parameter 
and converts it to celsius.
*/

function convertFahrToCelsius(val) {
  if(typeof val === "string" || typeof val === "number") {
    var num = parseInt(val);
    var result = ((num-32) / 1.8);
    var resultLog = result.toFixed(4);
    return `${resultLog}`
  };

if(Array.isArray(val))
{return `[${val}] Is not valid parameter but a/an array.`}
if(typeof val === "object")
{
  var value = JSON.stringify(val);
  return `${value} Is not a valid number but a/an object`}
};
//If = 1.8c + 32 ( E.G 0deg C = 32deg F)
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius([1,2,3]));
console.log(convertFahrToCelsius({temp:0 , name: "ijebu"}));







/*
2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, 
creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" 
and "oh", then returns the resulting array.
 */


const checkYuGiHo = (n)=>{
        if (Array.isArray(n)) {
        return `[${n}] Is not valid parameter but a/an array.`
    }
        if(typeof n === "object") {
        let result = JSON.stringify(n)
        return '${result}: is not a valid parameter but a/an ${typeof(n)}';
    }

        if(typeof n === "string" || typeof n === "boolean" || typeof n === 'undefined' || typeof n === "object" ||
        typeof n === "function") {
        var topping = JSON.stringify(n)
        return `invalid parameter: ${topping} is a/an ${typeof(n)}`; 

    }else {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 ===0 && i%3===0 && i % 5 === 0) {
        arr.push('yu-gi-ho')
        } else if (i%2 ===0 && i% 3===0) {
          arr.push('yu-gi')
        } else if (i % 3===0 && i % 5 === 0) {
        arr.push('yu-ho');
        } else if (i%2===0 && i%3===0) {
        arr.push('gi-ho')
        } else if (i%2===0 && i%5===0) {
        arr.push('yu-gi')
        } else if (i%3===0 && i%5===0) {
          arr.push('yu-ho')
        } else if (i%2===0 ) {
        arr.push('yu')
        } else if (i % 3 === 0) {
        arr.push('gi')
        } else if(i % 5===0) {
        arr.push('ho');
        } else {
        arr.push(i)
      }
    }
    return arr;
  
  }
}
  console.log(checkYuGiHo(30))
  console.log(checkYuGiHo(10))
  console.log(checkYuGiHo("fizzbuzz is meh"))
  

  