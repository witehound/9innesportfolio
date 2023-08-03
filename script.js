const openRules = document.getElementById("rule-footer");
const ruleModal = document.getElementById("rules");
const closeIcon = document.getElementById("close-icon");
const game = document.getElementById("game");
const hand = document.getElementById("hand");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const gameScreen = document.getElementById("game-screen");
const userScreenItem = document.getElementById("user-screen-item");
const computerScreenItem = document.getElementById("computer-screen-item");

const scroreBoard = document.getElementById("scrore-board");

let totalScore = 0;

const updateFromLocalStorage = () => {
  let temp =
    localStorage.getItem("result") == null
      ? 0
      : (totalScore = localStorage.getItem("result"));

  scroreBoard.innerHTML = temp;
};

const setLocatStorage = (number) => {
  localStorage.setItem("result", number);
};

const data = [
  [hand, "hsl(230, 89%, 62%), hsl(230, 89%, 65%)", "./images/icon-paper.svg"],
  [
    scissors,
    "hsl(39, 89%, 49%), hsl(40, 84%, 53%)",
    "images/icon-scissors.svg",
  ],
  [rock, "hsl(349, 71%, 52%), hsl(349, 70%, 56%)", "images/icon-rock.svg"],
];

const calResult = (user, computer) => {
  if (user == computer) return 2;
  if (user == 0) {
    if (computer == 1) return 0;
    return 1;
  } else if (user == 1) {
    if (computer == 2) return 0;
    return 1;
  } else {
    if (computer == 0) return 0;
    return 1;
  }
};

const cgn = Math.floor(Math.random() * 2);

openRules.addEventListener("click", () => {
  ruleModal.style.display = "block";
  ruleModal.style.display = "flex";
  openRules.style.display = "none";
});

closeIcon.addEventListener("click", () => {
  ruleModal.style.display = "none";
  openRules.style.display = "block";
});

const move = (bgColor, src, userScreenItem) => {
  game.style.display = "none";
  gameScreen.style.display = "block";
  gameScreen.style.display = "flex";
  gameScreen.style.height = "auto";
  userScreenItem.style.display = "block";
  userScreenItem.style.width = "200px";
  userScreenItem.style.height = "200px";
  userScreenItem.style.borderRadius = "50%";
  userScreenItem.style.backgroundImage = `linear-gradient(${bgColor})`;
  userScreenItem.style.display = "flex";
  const user = document.createElement("div");
  user.style.backgroundColor = "white";
  user.style.width = "170px";
  user.style.height = "170px";
  user.style.borderRadius = "50%";
  user.style.display = "flex";
  user.style.alignItems = "center";
  user.style.justifyContent = "center";
  const image = document.createElement("img");
  image.setAttribute("src", src);
  user.appendChild(image);
  userScreenItem.appendChild(user);
};

function play(type, bgColor, src, userScreenItem, user) {
  type.addEventListener("click", () => {
    move(bgColor, src, userScreenItem);

    const res = calResult(user, cgn);

    setTimeout(() => {
      move(data[cgn][1], data[cgn][2], computerScreenItem);
      if (res == 1) {
        totalScore++;
        console.log(totalScore);
        setLocatStorage(totalScore);
        scroreBoard.innerHTML = totalScore;
      } else if (res == 2) {
      } else {
      }
    }, 2000);
  });
}

updateFromLocalStorage();

for (let i = 0; i < data.length; i++) {
  play(data[i][0], data[i][1], data[i][2], userScreenItem, i);
}
