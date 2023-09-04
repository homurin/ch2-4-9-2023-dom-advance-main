const btn = Array.from(document.querySelectorAll(".drum"));

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    const btnKey = this.innerHTML;
    makeAudio(btnKey);
    buttonAnimation(btnKey);
  });
}

document.addEventListener("keypress", function (e) {
  makeAudio(e.key);
  buttonAnimation(e.key);
});

function makeAudio(key) {
  switch (key) {
    case "w":
      new Audio("./sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("./sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("./sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("./sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("./sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("./sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("./sounds/tom-4.mp3").play();
      break;
    default:
      alert("Ini gak ada soundnya");
      console.info("Ini gak ada soundnya");
      break;
  }
}

function buttonAnimation(currentKey) {
  const className = document.querySelector(`.${currentKey}`).classList;
  className.add("pressed");
  setTimeout(() => {
    className.remove("pressed");
  }, 100);
  //   console.info(className);
}
