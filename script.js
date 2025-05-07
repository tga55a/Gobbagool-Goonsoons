// DOM Elements
const bank = document.getElementById("bank")
const gobbagool = document.getElementById("gobbagool")
const perSecond = document.getElementById("perSecond")
const Buttons = document.getElementById("Buttons")
const dumbPet = document.getElementById("dumbpet")
const video = document.getElementById("video")
const help = document.getElementById("Help")
dumbPet.style.visibility = "hidden"
// Variables
let totalOwned = 0
let gobs = 0
let rate = 0
let checked = false


// Methods


function GobOnClicked() {
    gobs += 1 + (totalOwned / 2)
    bank.textContent = gobs.toFixed(2)
}


function PeriodicIncrease() {
    totalOwned = 0
    gobs += rate
    bank.textContent = gobs.toFixed(2)
    setTimeout(PeriodicIncrease, 1000);
    for (let pet in Pets){
        totalOwned += Pets[pet].Owned
    } 
}


// Pet Class
class Pet {
    constructor(PetName, Cost, Rate, divisible, PeriodicIncreaseCost, PeriodicIncreaseRate, img) {

        let Div = document.createElement("div") // The div element representing this pet
        let Button = document.createElement("button") // A button element that when clicked, will give the player the pet in exchange for Gobs
        let imgel = document.createElement("img") // An image element that displays the pet's appearance
        let PetCost = document.createElement("p") // A paragraph element representing the pet's cost.

        // Add the image into the button 
        imgel.setAttribute("src", img) // Insert the image file into the image element
        Button.append(imgel) // Insert the image element into the button element

        PetCost.textContent = `Cost: ${Cost} ` // Display the pet's cost
        Button.innerHTML += PetName // Add the pet's name to the putton
        
        // Reserve Gobbagool Goonsoon
        if (PetName !== "Gobbagool Goonsoon"){
            Div.append(Button, PetCost)
        }

        
        this.PetName = PetName
        this.Cost = Cost
        this.Owned = 0
        this.Rate = Rate
        this.divisible = divisible
        this.PeriodicIncreaseCost = PeriodicIncreaseCost
        this.PeriodicIncreaseRate = PeriodicIncreaseRate
        this.PetCostElement = PetCost
        this.Div = Div
        this.Button = Button

        // Setup button purchase functionality
        let update = this.update()
        Button.addEventListener("click", update)
        Buttons.appendChild(Div)
    }

    update() {

        let Object = this
        
        return function() {
            if (gobs >= Object.Cost){

                // Purchase this pet
                rate += Object.Rate * Object.PeriodicIncreaseRate
                perSecond.textContent = `Gobs Per Second: ${rate.toFixed(2)}`
                gobs -= Object.Cost
                Object.Cost = (Object.Cost * (Object.PeriodicIncreaseCost)).toFixed(0)
                Object.Owned += 1

                // Make Gobbagool Goonsoon visible once 1B gobs is reached
                if(gobs >= 100000000 && checked === false){
                    Pets["Gobbagool Goonson"].Div.append(
                        Pets["Gobbagool Goonson"].Button, 
                        Pets["Gobbagool Goonson"].PetCostElement
                    )
                    checked = true
                }   
    
                // Display
                console.log(`${Object.PetName} Owned `  + Object.Owned)
                Object.PetCostElement.textContent =  `Cost: ${Object.Cost}, Owned: ${Object.Owned}`
            }
        }
    }
}

// Instantiate Each Pet
let Pets = {
    "Tralalero Tralala": new Pet(
        "Tralalero Tralala", // Pet Name
        5, // Cost
        0.5, // Rate
        10, // Divisible ()
        1.5, // Increase Cost Rate
        1.1, // Increase Rate
        "FinalTralalaF1.png" // Pet Image
    ),

    "Bombardiro Crocodilo": new Pet(
        "Bombardiro Crocodilo",
        100 , 
        5, 
        10, 
        1.5, 
        1.6, 
        "FinalCrocF1.png"
    ),

    "Brr Brr Patapim": new Pet(
        "Brr Brr Patapim", 
        1000, 
        10, 
        10, 
        2.0, 
        2.1, 
        "RoughBushManMonkey.png"
    ),

    "Boneca Ambalabu": new Pet(
        "Boneca Ambalabu",
        5000, 
        20, 
        10, 
        2.0, 
        2.6, 
        "FinalFrogF1.png"
    ),

    "Bobrito Bandito": new Pet(
        "Bobrito Bandito",
        25000, 
        50, 
        10, 
        2.5, 
        3.1, 
        "FinalMafiaBeaverF1.png"
    ),

    "Lirili Larila": new Pet(
        "Lirili Larila", 
        100000, 
        100, 
        10, 
        2.5, 
        3.6, 
        "RoughCactusElephant.png"
    ),

    "Ballerina Capuccina": new Pet(
        "Ballerina Capuccina", 
        400000, 
        250, 
        10, 
        3.0, 
        4.1, 
        "FinalBalletF1.png"
    ),

    "Cupuccino Assasino": new Pet(
        "Cupuccino Assasino", 
        750000, 500, 
        10, 
        3.0, 
        4.6, 
        "FinalNinjaF1.png"
    ),

    "Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur": new Pet(
        "Tung Tung Tung Tung Tung Tung Tung Tung Tung Sahur", 
        1000000, 
        5000, 
        10, 
        3.5, 
        5.1, 
        "TungTungRough.png"
    ),

    "Chimpanzini Bananini": new Pet(
        "Chimpanzini Bananini", 
        5000000, 
        10000, 
        10, 
        3.5, 
        5.6, 
        "FinalBananaF1.png"
    ),

    "Gobbagool Goonson": new Pet(
        "Gobbagool Goonsoon", 
        1000000000, 1000000000, 
        1, 
        1, 
        1, 
        "FinalGabaGool.png"
    )
}

// Init
PeriodicIncrease()
gobbagool.addEventListener("click", GobOnClicked)
perSecond.textContent = "Gobs Per Second: 0"


function showdumbpet() {
    dumbPet.style.visibility = "visible"
    console.log("HELOALAOADLOAWLD")
    dumbPet.setAttribute("src", "FinalMafiaBeaverF1.png")

    setTimeout(() => {
        dumbPet.setAttribute("src", "FinalMafiaBeaverF2.png")
    }, 1500);

    setTimeout(() => {
        dumbPet.setAttribute("src", "FinalMafiaBeaverF1.png")
    }, 2000);

    setTimeout(() => {
        dumbPet.setAttribute("src", "FinalMafiaBeaverF2.png")
    }, 2500);

    setTimeout(() => {
        dumbPet.setAttribute("src", "FinalMafiaBeaverF1.png")
    }, 3000);

    setTimeout(() => {
        dumbPet.setAttribute("src", "FinalMafiaBeaverF2.png")
    }, 3500);

    setTimeout(() => {
        dumbPet.setAttribute("src", "FinalMafiaBeaverF1.png")
    }, 4000);

    setTimeout(() => {
        dumbPet.setAttribute("src", "FinalMafiaBeaverF2.png")
        dumbPet.style.visibility = "hidden"
    }, 4500);


}

setTimeout(showdumbpet, 10000)

help.addEventListener("click", showHelp)
function showHelp(){
    window.open("https://drive.google.com/file/d/1J7r8kD7g3lcPRikv68tumc0-5NQuJqx1/view?usp=sharing")
}