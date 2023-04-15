function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
  
    let result = 1;
  
    for (let i = num; i > 0; i--) {
      result *= i;
    }
  
    return result;
  }

const num = 5;
const fact = factorial(num);
console.log(fact);