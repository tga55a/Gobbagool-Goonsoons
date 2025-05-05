let bank = document.getElementById("bank")
let gobbagool = document.getElementById("gobbagool")
gobbagool.addEventListener("click", gobfunc)

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


        PetCost.textContent = `Cost: ${Cost}`


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
                gobs -= Object.Cost
                Object.Cost = (Object.Cost * (Object.IncreaseCost)).toFixed(0)
                Object.Owned += 1

                console.log(Object.Cost)
    
                // Display
                // bank.textContent = gobs.toFixed(2)
                console.log(`${Object.PetName} owned `  + Object.Owned)

                Object.PetCostElement.textContent =  `Cost: ${Object.Cost}`
            }
            if (Object.Owned % Object.divisible === 0 && Object.Owned !== 0){
                // Object.Cost += 1

            }
        }

        
    }
}

let Pets = {
    "Tralalero Tralala": new Pet("Tralalero Tralala", 5, 0.5, 5, 1.1, 1.1),
    "Bombardiro Crocodilo": new Pet("Bombardiro Crocodilo",25 , 2, 10, 1.2, 1.5),
    "Brr Brr Patapim": new Pet("Brr Brr Patapim", 100, 5, 5, 1.5, 2.0),
    "Boneca Ambalabu": new Pet("Boneca Ambalabu"),
    "Bobrito Bandito": new Pet("Bobrito Bandito"),
    "Lirili Larila": new Pet("Lirili Larila"),
    "Ballerina Capuccina": new Pet("Ballerina Capuccina"),
    "Cupuccino Assasino": new Pet("Cupuccino Assasino"),
    "Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur": new Pet("Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur"),
    "Chimpanzini Bananini": new Pet("Chimpanzini Bananini"),
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





