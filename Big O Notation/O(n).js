const animals = ["giraffe", "tiger", "lion", "cat"];

// BIG O(n)
// WE ARE CHECKING ON EACH ITERATION IS THIS CAT , IS THIS CAT . THAT INCREASES NUMBER OF ITERATION

function findCat(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "cat") {
      console.log("Found");
    }
  }
}

findCat(animals);
