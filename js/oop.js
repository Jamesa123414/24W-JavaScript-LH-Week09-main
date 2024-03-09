const output = document.getElementById('output');
const output2 = document.getElementById('output2');

// STEP 1a and 1b
function createNewPerson(name) {
    let obj = {};
    obj.name = name;
    obj.greetings = function () {
        return `Hello, this is ${this.name}`;
    };
    return obj;
}
let person1 = createNewPerson("P1");
let person2 = createNewPerson("P2");
output.textContent = person1.greetings();

// STEP 2a and 2b
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.greetings = function () {
        return `Hello, this is ${this.name.firstName}`;
    };
}
let person3 = new Person("John", "Doe", 30, "Male", ["Reading", "Swimming"]);

// STEP 3a, 3b, 3c
/* Person constructor from Step 2 is complete for this step */

// STEP 4a, 4b, 4c
let car = new Object();
car.brand = "Honda";
car.model = "Civic";
car.fun = function() {
    return `This is a fun ${this.brand} ${this.model}`;
};

// STEP 5a, 5b
let anotherCar = Object.create(car);
console.log(anotherCar.brand);
output2.textContent = anotherCar.brand;

// Hamburger Object Creator Function
function Hamburger(bunType, vegetables, cheeses, sauces, pattyType, pattyCount, extras) {
    this.bunType = bunType;
    this.vegetables = vegetables;
    this.cheeses = cheeses;
    this.sauces = sauces;
    this.pattyType = pattyType;
    this.pattyCount = pattyCount;
    this.extras = extras;
    this.description = function() {
        return `This hamburger has a ${this.bunType} bun, ${this.pattyCount} ${this.pattyType} patty(ies), ${this.vegetables.join(", ")}, ${this.cheeses.join(", ")} cheese(s), ${this.sauces.join(", ")} sauce(s), and ${this.extras.join(", ")} as extras.`;
    };
}

// Creating a Hamburger instance
let myHamburger = new Hamburger("sesame", ["lettuce", "tomato"], ["cheddar"], ["mayo", "ketchup"], "beef", 2, ["pickles", "hot peppers", "olives"]);
console.log(myHamburger.description());
