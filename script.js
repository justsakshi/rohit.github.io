const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked and hide the buttons
yesBtn.addEventListener("click", () => {
  question.innerHTML = "okeyy, so where are we going?😘 ";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm1yd2xlaHVvbW8ycGlyNmFmZGptaTF3ejZoanQ1NTc2YnR6dzE2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ifB1v1W3Db0GIW7uTA/giphy.gif";

  // Hide Yes and No buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// Make the No button move randomly within the screen on click
noBtn.addEventListener("click", () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the screen
  const maxX = viewportWidth - noBtnRect.width;
  const maxY = viewportHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute"; // Ensure the button can move freely
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
