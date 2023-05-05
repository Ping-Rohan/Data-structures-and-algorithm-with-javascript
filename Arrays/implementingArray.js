class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    this.length--;
    console.log(this.length); // 4
    this.shift(index);
  }

  shift(index) {
    for (let i = index; i <= this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length];
  }
}

const array = new myArray();
array.push(10);
array.push(20);
array.push(30);
array.push(30);
array.push(30);

array.delete(1);
array.delete(0);

console.log(array);
