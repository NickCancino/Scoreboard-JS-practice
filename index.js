let homescore = document.getElementById("homescore")
let guestscore = document.getElementById("guestscore")
let homeCurrScore = 0
let guestCurrScore = 0



function addOneHome(){
    homescore.textContent = homeCurrScore += 1
}
function addTwoHome(){
    homescore.textContent = homeCurrScore += 2
}
function addThreeHome(){
    homescore.textContent = homeCurrScore += 3
}



function addOneGuest(){
    guestscore.textContent = guestCurrScore += 1
}
function addTwoGuest(){
    guestscore.textContent = guestCurrScore += 2
}
function addThreeGuest(){
    guestscore.textContent = guestCurrScore += 3
}

function reset(){
    guestCurrScore = 0
    homeCurrScore = 0
    homescore.textContent = 0
    guestscore.textContent = 0
}
