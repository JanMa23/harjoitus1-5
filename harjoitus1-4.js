// harjoitus 1 a ----------------------

let string = "asuntokionapajaa"

let stringToSearch = "paja"

// !== -1 tarkoittaa:  ei ole -1. Kun arvo ei ole -1, slice leikkaa sanasta 11-15 kirjaimet ylös (paja). arvoilla 11,14 tuli pelkkä "paj". 
// tässä paja löytyy asuntokionapajaa sanasta eli ei ole -1
if (string.search(stringToSearch) !== -1 ) {
    let newString = string.slice(11,15)

    console.log("Origin string: ", stringToSearch)
    console.log("New string: ", newString)
} 
else {
  console.log("string not found")
}

// 1 b ----------------------



let newString = ""


// poimii joka kolmannen kirjaimen, (i + 1) avulla aloitetaan laskeminen merkkijonon kolmannesta kirjaimesta
for (let i = 0; i < string.length; i++) {
  if ((i + 1) % 3 === 0) {
        newString += string[i].toUpperCase().replace("A", "*") // haku iso A, koska uppercase
  } 
        
}

console.log(newString)


// harjoitus 2 -----------------------

let text
let age 

while (age !== "18" && age !== "20" && age !== "22") {
    age = prompt("Age: ")
  
  switch (age) {
    case "18" :
      text = "18 : Young"
      break;
    case "20" :
      text = "20 : Middle age"
      break;
    case "22" :
      text = "22 : Old"
      break;
    default:
      text = "?"
      break;
  }

}


console.log(text)

// kysyy ikää kunnes vastaus 18, 20 tai 22
// loop while

// https://www.w3schools.com/jsref/jsref_switch.asp



// Task2
// Ask age ( in console type age, Use prompt ( on the right side there is youtube-video about Prompt. )
// Ask age-input as long as that the age is between 18 and 22. If age is ok, then output ( debends age) 
// OUTPUT:    18 : Young
//                    20 : Middle age
//                    22 : Old

// Tips: Ask input age as long as means that you need to use loop.
// To output look also SWITCH

  // https://www.w3schools.com/jsref/jsref_search.asp


//   3 ----------------------------


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

// 4 -----------------------------




class Flower {
    constructor(Type, Color, Amount, InStore) {
        this.flowerName = Type
        this.flowerColor = Color
        this.flowerAmount = Amount
        this.flowerInStore =  InStore
    }

        changeColor(newColor) {
            this.flowerColor = newColor
        }
        changeAmount(newAmount) {
            this.flowerAmount = newAmount
        }
        changeInStore(newInStore) {
            this.flowerInStore = newInStore
        }

        tulostaTiedot(tulokset) {
            const { flowerName, flowerColor, flowerAmount, flowerInStore } = this;
            console.log(`${tulokset}:`, { flowerName, flowerColor, flowerAmount, flowerInStore: flowerInStore ? "Yes" : "No" });
  
          }
 
}

let flower1 = new Flower ("Rose", "Red", 5, true)

flower1.tulostaTiedot("original")


flower1.changeColor("Yellow")
flower1.changeAmount(4)
flower1.changeInStore(false)


flower1.tulostaTiedot("after changes")