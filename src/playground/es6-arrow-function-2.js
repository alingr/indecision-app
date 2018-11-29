const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

//this keyword

const user = {
  name: "Alin",
  cities: ["Timisoara", "New York", "London"],
  printPlacesLived() {
    return this.cities.map(city => {
      return this.name + " has lived in " + city;
    });

    const that = this;
    //console.log(this.name);
    //console.log(this.cities);

    // this.cities.forEach(city => {
    //   console.log(this.name + " has lived in: " + city);
    // });
  }
};

console.log(user.printPlacesLived());


// challenge area - multiply by number

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map(number => {
            return this.multiplyBy * number;
        });
    }

};

console.log(multiplier.multiply());
