
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

