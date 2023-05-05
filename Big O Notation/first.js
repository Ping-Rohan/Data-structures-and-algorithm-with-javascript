const students = ["rohit", "roshan", "rohan"]; // this took less time

const largeStudents = new Array(10000).fill("rohan"); // this took even longer time

// THE BIG O FOR THIS SORT OF PROBLEM IS O(n)
// IT TAKES TAKES N NUMBER OF ITERATIONS
// THE TOTAL TIME TAKEN REALLY DEPENDS UPON USERS COMPUTER
// HENCE BIG O WE CAN DIFFER WHICH ALGORITHM IS BETTER WHILE INCREASING THE NUMBER OF INPUTS
// BIG O SHOWS HOW MUCH NUMBER OF OPEREATIONS IT TAKES WHEN NUMBER OF INPUTS INCREASES

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

findStudent(largeStudents);
