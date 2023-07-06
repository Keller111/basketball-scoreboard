let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScore2El =document.getElementById("home-score")
let homeScore2 = 0

function increaseHomeScoreTwo(){
    homeScore += 2
    homeScore2El.textContent = homeScore
}

let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScore3El =document.getElementById("home-score")
let homeScore3 = 0

function increaseHomeScoreThree(){
    homeScore += 3
    homeScore3El.textContent = homeScore
}

let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreEl =document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScore2El =document.getElementById("guest-score")
let guestScore2 = 0

function increaseGuestScoreTwo(){
    guestScore += 2
    guestScore2El.textContent = guestScore
}

let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScore3El =document.getElementById("guest-score")
let guestScore3 = 0

function increaseGuestScoreThree(){
    guestScore += 3
    guestScore3El.textContent = guestScore
}

