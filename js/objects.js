window.onload = function() {
    const output = document.getElementById('output');
/* STEP 1: Create an object (looks a lot like declaring a variable, but with empty braces), 
then open this page in a browser and enter 'person' in the console */
    let person = {
        name: {
            firstName: "Priyansh",
            lastName: "Thakar"
        },
        age: 80,
        gender: "Male",
        address: {
            streetNo: 100,
            streetName: "Georgian Drive",
            city: "Barrie"
        },
        interests: ["painting", "swimming", "coding"],
        greeting: function() {
            alert(`Hello, ${this.name.firstName} ${this.name.lastName}! How are you?`);
        },
        bio: function() {
            return `The interests of ${this.name.firstName}, aged ${this.age}, of gender ${this.gender}, are ${this.interests.join(', ')}.`;
        },
        goodbye: function() {
            alert(`This is ${this.name.firstName} signing off!`);
        }
    };

    // Update person's name and age
    person.name.firstName = "Robert";
    person.age = 30;

    // Add new properties
    person.eyeColor = "green";
    person.hairColor = "black";

    let person1 = {
        name: "P1",
        hello: function() {
            alert(`Hello from ${this.name}`);
        }
    };

    let person2 = {
        name: "P2",
        hello: function() {
            alert(`Hello from ${this.name}`);
        }
    };

    // Output the bio to the web page
    output.textContent = person.bio();
}
