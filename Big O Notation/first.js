const students = ["rohit", "roshan", "rohan"];

// THE BIG O FOR THIS SORT OF PROBLEM IS O(n)
// IT TAKES TAKES N NUMBER OF ITERATIONS

function findStudent(array) {
  let time0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "rohan") {
      console.log("Found....");
    }
  }
  let time1 = performance.now();
  console.log(`The program took  ${time1 - time0} millisecond`);
}

findStudent(students);
