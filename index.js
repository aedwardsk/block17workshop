// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    return this.data.map((number, index) => `${index}: ${number}`);
  }

  odds() {
    let getOdds = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] % 2 !== 0) {
        getOdds.push(this.data[i]);
      }
    }
    return getOdds;
    //return the odd numbers in data
  }
  evens() {
    let getEvens = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] % 2 === 0) {
        getEvens.push(this.data[i]);
      }
    }
    return getEvens;
  }
  sum() {
    return this.data.reduce((getSum, num) => getSum + num, 0);
  }
  product() {
    return this.data.reduce((storeVal, num) => storeVal * num, 1);
  }
  greaterThan(target) {
    let greaters = this.data.filter((num) => num > target);
    {
      return greaters;
    }
  }
  howMany(target) {
    let many = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === target) {
        many++;
      }
    }
    return many;
  }
}
//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
console.log(n1.printNumbers()); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
