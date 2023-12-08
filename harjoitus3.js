let animals = ["Dog", "Horse", "Cow"]


console.log(animals.join (", "))

// -----------------

let animals2 = animals.map(animal => animal)

animals2.push ("Cat", "Sheep")

console.log("New array: ", animals2)


// ---------------------



let animalsSearchCow = animals2.includes("Cow")
let animalsSearchCo = animals2.includes("Co")

console.log(" Search result:", animalsSearchCow ? "Cow, Founded" : "Cow, Not Found")
console.log(" Search result:", animalsSearchCo ? "Co, Founded" : "Co, Not Found")



// Greate Array “Dog”,”Horse”,”Cow”
// a) PrintOut Array, 
// OUTPUT: Dog
//                 Horse
//                 Cow
 
// b) Copy Array to new Array  ( use Map )
// Add to new Array new columns “Cat”, “Sheep”
// OUTPUT: New array:  [ 'Dog', 'Horse', 'Cow', 'Cat', 'Sheep' ]
// c) 1) Search “Cow” from new Array.  2) Search "Co".
// OUTPUT:    Search result:  Cow, Founded
//                     Search result:  Co,  Not found