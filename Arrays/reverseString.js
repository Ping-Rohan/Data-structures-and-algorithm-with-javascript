let string = "hello i am rohan tiwari";

function reverse(str) {
  if (!str || typeof str !== "string" || str.length < 2) {
    throw new Error(
      "String must be at least 2 character long or you are providing other type"
    );
  }
  let reverse = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverse.push(str[i]);
  }
  return reverse.join("");
}

const rev = reverse(string);
console.log(rev);
