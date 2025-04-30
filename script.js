let bank = document.getElementById("bank")
let gobbagool = document.getElementById("gobbagool")
gobbagool.addEventListener("click", gobfunc)
let gobs = 0
let rate = 0

//All the tralalero tralala stuff
let tralcost = 5
let tralowned = 0

let tralalero = document.getElementById("tralalero")
tralalero.addEventListener("click", tralalerofunc)
tralalero.textContent = `Tralalero Tralala: Cost = ${tralcost}`


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





