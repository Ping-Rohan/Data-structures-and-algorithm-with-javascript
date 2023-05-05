// array 1 = ["x" , "y" , "z" , "a"]
// array 2 = ["a" , "b" , "c" ,"x"];
// check if array 1 at least one element is inside array 2 or not

function containsCommonItem(firstArr, secondArr) {
  let map = {};
  for (let i = 0; i < firstArr.length; i++) {
    if (!map[firstArr[i]]) {
      map[firstArr[i]] = true;
    }
  }

  for (let j = 0; j < secondArr.length; j++) {
    if (map[secondArr[j]]) {
      return true;
    }
    return false;
  }
}

const array1 = ["x", "y", "z", "a"];
const array2 = ["k", "b", "c", "n"];

const doContain = containsCommonItem(array1, array2);
console.log(doContain);
