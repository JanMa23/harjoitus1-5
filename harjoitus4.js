


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


// Task4 -1
// Create Class with methods  
// Class Flower: Properties:  Type (like Rose), Color, Amount ( how many), inStore ( false/true)
// Methods:  change Amount, change color, change is inStore false/True 
// Change color, amount, instore
// OUTPUT: Original situation:  Flower { Type: 'Rose', Color: 'Red', Amount: 5, inStore: Yes }
//                 After changes:  Flower { Type: Rose , Color: Yellow , Amount: 4 , inStore: No }




