const popupDiv = document.querySelector(".popup");
const flexContainer = document.querySelector(".home .flex-container");
const gameDiv = document.querySelector(".home .popup-content");
const speluitlegDiv = document.querySelector(".home .speluitleg");

function openPopUp() {
    popupDiv.style.display = "block";
    flexContainer.style.display = "none";
}

function closePopUp() {
    popupDiv.style.display = "none";
    flexContainer.style.display = "flex";
}

function startGame() {
    speluitlegDiv.style.display = "none";
    gameDiv.style.display = "block";
}