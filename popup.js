const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close');

button.onclick = () => {
    popup.style.display = "block";
}

popupClose.onclick = () => {
    popup.style.display = "none";
}

popup.onclick = () => {
    popup.style.display = "none";
}