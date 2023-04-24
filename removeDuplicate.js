function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

const arr = [11, 11, 3, 4, 7, 9, 7, 9, 3, 3];
const newArr = removeDuplicates(arr);
console.log(newArr);