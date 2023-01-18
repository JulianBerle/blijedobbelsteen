const popupDiv = document.querySelector(".popup");
const flexContainer = document.querySelector(".home .flex-container");

function openPopUp() {
    popupDiv.style.display = "block";
    flexContainer.style.display = "none";
}

function closePopUp() {
    popupDiv.style.display = "none";
    flexContainer.style.display = "flex";
}