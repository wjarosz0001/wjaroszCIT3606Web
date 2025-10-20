const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const myDog = new Image();
const badGator = new Image();
var score = 0;

let dogX = Math.random() * (canvas.width - 100);
let dogY = Math.random() * (canvas.height - 100);
let gatorX = Math.random() * (canvas.width - 100);
let gatorY = Math.random() * (canvas.height - 100);

myDog.src = "./Images/dog.png";
badGator.src = "./Images/Alligator.png";


function drawFunction() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  dogX = Math.random() * (canvas.width - 100);
  dogY = Math.random() * (canvas.height - 100);
  gatorX = Math.random() * (canvas.width - 100);
  gatorY = Math.random() * (canvas.height - 100);

  ctx.drawImage(myDog, dogX, dogY, 100, 100);
  ctx.drawImage(badGator, gatorX, gatorY, 100, 100);
}

setInterval(drawFunction, 1000);

canvas.addEventListener("mousedown", function (event) {
  const rect = canvas.getBoundingClientRect();
  const mx = event.clientX - rect.left;
  const my = event.clientY - rect.top;

  if (mx >= dogX && mx <= dogX + 100 && my >= dogY && my <= dogY + 100) {
    score += 1;
    alert("You saved the dog! 🐕\n" + "Your Score is: " + score);
    return;
  }

  if (mx >= gatorX && mx <= gatorX + 100 && my >= gatorY && my <= gatorY + 100) {
    score -= 1;
    alert("Oh no! The gator got you! 🐊\n" + "Your Score is: " + score);
    return;
  }

  alert("Miss! Try again!\n" + "Your Score is: " + score);
});



