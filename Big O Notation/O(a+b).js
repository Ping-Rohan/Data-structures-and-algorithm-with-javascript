function compress(a, b) {
  a.forEach((item) => {
    console.log(item);
  });

  b.forEach((item) => {
    console.log(item);
  });
}

// THERE ARE SEPAREATE INPUTS
compress(a, b); // O(a+b)
