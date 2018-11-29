class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor) {
      description += ` Their major is ${this.major}`;
    }

    return description;
  }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }

}

const me = new Student("Alin Groza", 30, "Computer Science");
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me);
console.log("hasMajor: " + me.hasMajor());

console.log("---");

const other = new Student();
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other);
console.log("hasMajor: " + other.hasMajor());

console.log("---");

const traveller = new Traveller('Mike Smith', 25, 'New York');
console.log(traveller.getGreeting());
console.log(traveller.getDescription());
console.log(traveller);

