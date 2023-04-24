function rotateArray(arr, rounds) {

    const len = arr.length;
  
    const rotation = rounds % len;
  
    const lastPosition = len - rotation;

    const rotatedArray = [...arr.slice(lastPosition), ...arr.slice(0, lastPosition)];
  
    return rotatedArray;
  }

let result = rotateArray([1,2,3,4,5], 2);

console.log(result);