let homescore = 0;
let guestscore = 0;

let homeScoreElement = document.getElementById("home-score");
let guestScoreElement = document.getElementById("guest-score");

function updateHomeScore(points) {
    homescore += points;
    homeScoreElement.textContent = homescore;
}

function updateGuestScore(points) {
    guestscore += points;
    guestScoreElement.textContent = guestscore;
}

function resetScores() {
    homescore = 0;
    guestscore = 0;
    homeScoreElement.textContent = homescore;
    guestScoreElement.textContent = guestscore;
}

document.getElementById("reset-button").addEventListener("click", function() {
    resetScores();
});

document.getElementById("home-plus-one").addEventListener("click", function() {
    updateHomeScore(1);     
});

document.getElementById("home-plus-two").addEventListener("click", function() {
    updateHomeScore(2);
});   

document.getElementById("home-plus-three").addEventListener("click", function() {
    updateHomeScore(3);
});   

document.getElementById("guest-plus-one").addEventListener("click", function() {
    updateGuestScore(1);
});

document.getElementById("guest-plus-two").addEventListener("click", function() {
    updateGuestScore(2);
});

document.getElementById("guest-plus-three").addEventListener("click", function() {
    updateGuestScore(3);
});