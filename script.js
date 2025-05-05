let bank = document.getElementById("bank")
let gobbagool = document.getElementById("gobbagool")
gobbagool.addEventListener("click", gobfunc)
let perSecond = document.getElementById("perSecond")
perSecond.textContent = "Gobs per second: 0"
let Buttons = document.getElementById("Buttons")
let gobs = 0
let rate = 0


// function tralalerofunc(){
//     if (gobs >= tralcost){
//         gobs -= 5
//         bank.textContent = gobs.toFixed(2)
//         rate += .01
//         tralowned += 1
//         console.log("tral owned " + tralowned)
        
//     }
//     console.log(tralowned)
//     if (tralowned % 5 === 0 && tralowned !== 0){
//         tralcost += 1
//         tralalero.textContent =  `Tralalero Tralala: Cost = ${tralcost}`
//     }
// }


class Pet {
    constructor(PetName, Cost, Rate, divisible, IncreaseCost, IncreaseRate) {

        let Div = document.createElement("div")
        let Button = document.createElement("button")
        let PetCost = document.createElement("p")
        Div.append(Button, PetCost)
        Button.textContent = PetName


        PetCost.textContent = `Cost: ${Cost} `


        this.PetName = PetName
        this.Cost = Cost
        this.Owned = 0
        this.Rate = Rate
        this.divisible = divisible
        this.IncreaseCost = IncreaseCost
        this.IncreaseRate = IncreaseRate
        this.PetCostElement = PetCost

        

        let update = this.update()

        Button.addEventListener("click", update)

        Buttons.appendChild(Div)
    }

    update() {

        let Object = this
        
        return function() {
            if (gobs >= Object.Cost){
                // Update
                rate += Object.Rate * Object.IncreaseRate
                console.log(rate)
                perSecond.textContent = `Gobs per second: ${rate.toFixed(2)}`
                gobs -= Object.Cost
                Object.Cost = (Object.Cost * (Object.IncreaseCost)).toFixed(0)
                Object.Owned += 1

                console.log(Object.Cost)
    
                // Display
                // bank.textContent = gobs.toFixed(2)
                console.log(`${Object.PetName} owned `  + Object.Owned)

                Object.PetCostElement.textContent =  `Cost: ${Object.Cost}, Owned: ${Object.Owned}`
            }
            if (Object.Owned % Object.divisible === 0 && Object.Owned !== 0){
                // Object.Cost += 1

            }
        }

        
    }
}

let Pets = {
    "Tralalero Tralala": new Pet("Tralalero Tralala", 5, 0.5, 5, 1.5, 1.1),
    "Bombardiro Crocodilo": new Pet("Bombardiro Crocodilo",25 , 5, 10, 1.5, 1.6),
    "Brr Brr Patapim": new Pet("Brr Brr Patapim", 100, 10, 5, 2.0, 2.1),
    "Boneca Ambalabu": new Pet("Boneca Ambalabu",500, 20, 10, 2.0, 2.6),
    "Bobrito Bandito": new Pet("Bobrito Bandito",750, 50, 5, 2.5, 3.1),
    "Lirili Larila": new Pet("Lirili Larila", 1000, 100, 10, 2.5, 3.6),
    "Ballerina Capuccina": new Pet("Ballerina Capuccina", 2500, 250, 5, 3.0, 4.1),
    "Cupuccino Assasino": new Pet("Cupuccino Assasino", 5000, 500, 10, 3.0, 4.6),
    "Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur": new Pet("Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur", 10000, 5000, 5, 3.5, 5.1 ),
    "Chimpanzini Bananini": new Pet("Chimpanzini Bananini", 20000, 10000, 5, 3.5, 5.6),
}



function gobfunc(){
    gobs += 1
    bank.textContent = gobs.toFixed(2)
}

function increase(){
    gobs += rate
    bank.textContent = gobs.toFixed(2)
    setTimeout(increase, 1000);
}

increase()





