// declaring a variable
// keyword identifier/variablename = value
var firstName = "Philip";
let lastName = "Egyir";
let age = 27; 
let isMarried = false;
let children = ["Bright", "Grace", "Rudi"];
let other = {
    favoriteColor: "Gold",
    favoriteSport: "Soccer",
    favoritefruit: "Apple",
};
const fullName = firstName + " " + lastName; // concatenation
const mySelf = `My name is ${firstName} ${lastName}`; // string interpolation
console.log(mySelf);

// STRINGS
let sentence = "This is a story about Philip Egyir in Blind Spot";
console.log(sentence.length);
console.log(sentence.split("Philip"));
console.log(sentence.replace("Philip", "Rudi"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("Spot"));
console.log(sentence.includes("in"));

// ARRAY
let days = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday",];
console.log(days.length);
days.push("Saturday");
console.log(days);
console.log(days.pop());
days.unshift("Sunday");
console.log(days);
console.log(days.shift());
console.log(days.indexOf("Friday"));
console.log(days[3]); // retrieving data
days[0] = "Sunday"; // change data in the array
console.log(days);

//OBJECT
let person = {
firstName:"Philip",
lastName: "Egyir",
age:27,
};
console.log(person.firstName);
console.log(person["firstName"]);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));