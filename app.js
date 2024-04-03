let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-Score");
const compScorePara = document.querySelector("#comp-Score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const draw = () => {
  //console.log("game was draw");
  msg.innerText = "Game was draw play again";
  msg.style.background = "#FF4242";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    //console.log("you Win");
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
    msg.style.background = "#00A878";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("you lose");
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.background = "#136FF8";
  }
};
const playGame = (userChoice) => {
  console.log("user choice", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer choice", compChoice);
  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissror,ppr
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //sscr,rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,ppr
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    //console.log("it was clicked");
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
