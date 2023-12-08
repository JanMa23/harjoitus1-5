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