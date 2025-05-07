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
    constructor(PetName, Cost, Rate, divisible, IncreaseCost, IncreaseRate, img) {

        let Div = document.createElement("div")
        let Button = document.createElement("button")
        let imgel = document.createElement("img")
        imgel.setAttribute("src", img)
        Button.append(imgel)

        let PetCost = document.createElement("p")
        Button.innerHTML += PetName
        
        if (PetName !== "Gobbagool Goonsoon"){
            Div.append(Button, PetCost)
        }
        

        PetCost.textContent = `Cost: ${Cost} `


        this.PetName = PetName
        this.Cost = Cost
        this.Owned = 0
        this.Rate = Rate
        this.divisible = divisible
        this.IncreaseCost = IncreaseCost
        this.IncreaseRate = IncreaseRate
        this.PetCostElement = PetCost
        this.Div = Div
        this.button = Button

        

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
                perSecond.textContent = `Gobs per second: ${rate.toFixed(2)}`
                gobs -= Object.Cost
                Object.Cost = (Object.Cost * (Object.IncreaseCost)).toFixed(0)
                Object.Owned += 1

                if(gobs >= 100000000 && checked === false){
                    Pets["Gobbagool Goonson"].Div.append(Pets["Gobbagool Goonson"].button, Pets["Gobbagool Goonson"].PetCostElement)
                    checked = true
                }   
    
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
    "Tralalero Tralala": new Pet("Tralalero Tralala", 5, 0.5, 10, 1.5, 1.1, "FinalTralalaF1.png"),
    "Bombardiro Crocodilo": new Pet("Bombardiro Crocodilo",100 , 5, 10, 1.5, 1.6, "FinalCrocF1.png"),
    "Brr Brr Patapim": new Pet("Brr Brr Patapim", 1000, 10, 10, 2.0, 2.1, "RoughBushManMonkey.png"),
    "Boneca Ambalabu": new Pet("Boneca Ambalabu",5000, 20, 10, 2.0, 2.6, "FinalFrogF1.png"),
    "Bobrito Bandito": new Pet("Bobrito Bandito",25000, 50, 10, 2.5, 3.1, "FinalMafiaBeaverF1.png"),
    "Lirili Larila": new Pet("Lirili Larila", 100000, 100, 10, 2.5, 3.6, "RoughCactusElephant.png"),
    "Ballerina Capuccina": new Pet("Ballerina Capuccina", 400000, 250, 10, 3.0, 4.1, "FinalBalletF1.png"),
    "Cupuccino Assasino": new Pet("Cupuccino Assasino", 750000, 500, 10, 3.0, 4.6, "FinalNinjaF1.png"),
    "Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur": new Pet("Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur", 1000000, 5000, 10, 3.5, 5.1, "TungTungRough.png"),
    "Chimpanzini Bananini": new Pet("Chimpanzini Bananini", 5000000, 10000, 10, 3.5, 5.6, "FinalBananaF1.png"),
    "Gobbagool Goonson": new Pet("Gobbagool Goonsoon", 1000000000, 1000000000, 1, 1, 1, "FinalGabaGool.png")
}


let totalOwned = 0
function gobfunc(){
    gobs += 1 + (totalOwned / 2)
    bank.textContent = gobs.toFixed(2)


}


function increase(){
    totalOwned = 0
    gobs += rate
    bank.textContent = gobs.toFixed(2)
    setTimeout(increase, 1000);
    for (let pet in Pets){
        totalOwned += Pets[pet].Owned
    }
    
}

increase()


let checked = false