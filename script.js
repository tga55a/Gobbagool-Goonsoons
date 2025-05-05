let bank = document.getElementById("bank")
let gobbagool = document.getElementById("gobbagool")
gobbagool.addEventListener("click", gobfunc)

let Buttons = document.getElementById("Buttons")
let gobs = 0
let rate = 0


function tralalerofunc(){
    if (gobs >= tralcost){
        gobs -= 5
        bank.textContent = gobs.toFixed(2)
        rate += .01
        tralowned += 1
        console.log("tral owned " + tralowned)
        
    }
    console.log(tralowned)
    if (tralowned % 5 === 0 && tralowned !== 0){
        tralcost += 1
        tralalero.textContent =  `Tralalero Tralala: Cost = ${tralcost}`
    }
}


class Pet {
    constructor(PetName, Cost, Rate, divisible) {

        let Button = document.createElement("button")
        Button.textContent = PetName


        this.PetName = PetName
        this.Cost = Cost
        this.Owned = 0
        this.rate = Rate
        this.divisible = divisible
        this.Button = Button

        let update = this.update()

        Button.addEventListener("click", update)

        Buttons.appendChild(Button)
    }

    update() {
        console.log("workinggg")
        let Owned = this.Owned
        let Cost = this.Cost
        let Rate = this.rate
        
        return function() {
            if (gobs >= Cost){
                // Update
                rate += Rate
                gobs -= Cost
                this.Owned += 1
    
                // Display
                bank.textContent = gobs.toFixed(2)
                console.log("tral owned " + this.Owned)
            }
            if (this.Owned % this.divisible === 0 && this.Owned !== 0){
                this.Cost += 1
                this.Button.textContent =  `${this.PetName}: Cost = ${this.Cost}`
            }
        }

        
    }
}

let Pets = {
    "Tralalero Tralala": new Pet("Tralalero Tralala", 5, 0.1, 5),
    "Bombardiro Crocodilo": new Pet("Bombardiro Crocodilo"),
    "Brr Brr Patapim": new Pet("Brr Brr Patapim"),
    "Boneca Ambalabu": new Pet("Boneca Ambalabu"),
    "Bobrito Bandito": new Pet("Bobrito Bandito"),
    "Lirili Larila": new Pet("Lirili Larila"),
    "Ballerina Capuccina": new Pet("Ballerina Capuccina"),
    "Cupuccino Assasino": new Pet("Cupuccino Assasino"),
    "Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur": new Pet("Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur"),
    "Chimpanzini Bananini": new Pet("Chimpanzini Bananini"),
}

for (Pet in Pets) {
    console.log(Pet)
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