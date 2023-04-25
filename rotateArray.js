function rotateArray(arr, rounds) {

    const len = arr.length;
  
    const rotation = rounds % len;
  
    const lastPosition = len - rotation;

    const rotatedArray = [...arr.slice(lastPosition), ...arr.slice(0, lastPosition)];
  
    return rotatedArray;
  }

let arr = [1,2,3,4,5];
let round = 2;
console.log(rotateArray(arr, round));