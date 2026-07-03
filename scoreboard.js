var homeScore = document.getElementById("home-score")
var guestScore = document.getElementById("guest-score")

var hometeam=0
var guestteam=0
function honepoint() {
    hometeam+=1
    homeScore.textContent =hometeam
}
function htwopoint() {
    hometeam+=2
    homeScore.textContent= hometeam
}
function hthreepoint() {
    hometeam+=3
    homeScore.textContent= hometeam

}
function gonepoint() {
    guestteam+=1
    guestScore.textContent= guestteam

}
function gtwopoint() {
     guestteam+=2
    guestScore.textContent= guestteam

}
function gthreepoint() {
     guestteam+=3
    guestScore.textContent= guestteam

}

function reset(){
    hometeam=0
    homeScore.textContent=0
    guestteam=0
    guestScore.textContent=0
}
