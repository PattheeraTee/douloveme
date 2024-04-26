"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 8;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
  if (noCount === MAX_IMAGES) {
    // เปลี่ยน URL ของ catImg เมื่อ noCount เท่ากับ MAX_IMAGES
    catImg.src = "https://media1.tenor.com/m/w43ByA1RgikAAAAC/milk-and-mocha-cry.gif";
  }
});

function handleYesClick() {
  titleElement.innerHTML = "I LOVE YOU SO MUCH TOO";
  buttonsContainer.classList.add("hidden");
  catImg.src = "https://media1.tenor.com/m/vNnh9I9GeuAAAAAd/sa.gif";
}



function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.5;

  yesButton.style.fontSize = `${newFontSize}px`;
}


function generateMessage(noCount) {
  const messages = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Please",
  "But I really love you",
  "But I really really love you",
  "Don't do this to me :(",
  "You're breaking my heart :(",
  "I'm gonna cry ",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/love-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
