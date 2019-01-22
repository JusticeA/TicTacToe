
//Declare Variables

let boxes = $(".platform").children();
let start = $(".btn1");
let restart = $(".btn2");
let score = document.querySelector(".score");
let begin = $(".begin");
let win = $(".win");
let lose = $(".lose");

// Functions/Actions
function clear() {
  // After win/loss/restart -- function clears the board.
  boxes.empty();
  boxes.removeClass("x o");
}

function checkX() {
  let audio = document.querySelector(".playing"); //Selects audio file
  let audio1 = document.querySelector(".sw"); //Selects audio file
  let audio2 = document.querySelector(".sl"); //Selects audio file
  audio.play();
  let that = $(this);
  console.log(that.text());
  if (that.text() == "") {
    // After click, check if box is empty and if so place "X"
    that.text("X").addClass("x");
    console.log(that.index());
    //Check for X and fill empty third box.
    if (
      boxes.eq(0).text() == "X" &&
      boxes.eq(2).text() == "X" &&
      boxes.eq(1).text() == ""
    ) {
      boxes
        .eq(1)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(0).text() == "X" &&
      boxes.eq(1).text() == "X" &&
      boxes.eq(2).text() == ""
    ) {
      boxes
        .eq(2)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(1).text() == "X" &&
      boxes.eq(2).text() == "X" &&
      boxes.eq(0).text() == ""
    ) {
      boxes
        .eq(0)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(2).text() == "X" &&
      boxes.eq(8).text() == "X" &&
      boxes.eq(5).text() == ""
    ) {
      boxes
        .eq(5)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(2).text() == "X" &&
      boxes.eq(5).text() == "X" &&
      boxes.eq(8).text() == ""
    ) {
      boxes
        .eq(8)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(5).text() == "X" &&
      boxes.eq(8).text() == "X" &&
      boxes.eq(2).text() == ""
    ) {
      boxes
        .eq(2)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(0).text() == "X" &&
      boxes.eq(6).text() == "X" &&
      boxes.eq(3).text() == ""
    ) {
      boxes
        .eq(3)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(0).text() == "X" &&
      boxes.eq(3).text() == "X" &&
      boxes.eq(6).text() == ""
    ) {
      boxes
        .eq(6)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(3).text() == "X" &&
      boxes.eq(6).text() == "X" &&
      boxes.eq(0).text() == ""
    ) {
      boxes
        .eq(0)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(6).text() == "X" &&
      boxes.eq(8).text() == "X" &&
      boxes.eq(7).text() == ""
    ) {
      boxes
        .eq(7)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(6).text() == "X" &&
      boxes.eq(7).text() == "X" &&
      boxes.eq(8).text() == ""
    ) {
      boxes
        .eq(8)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(7).text() == "X" &&
      boxes.eq(8).text() == "X" &&
      boxes.eq(6).text() == ""
    ) {
      boxes
        .eq(6)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(0).text() == "X" &&
      boxes.eq(4).text() == "X" &&
      boxes.eq(8).text() == ""
    ) {
      boxes
        .eq(8)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(4).text() == "X" &&
      boxes.eq(8).text() == "X" &&
      boxes.eq(0).text() == ""
    ) {
      boxes
        .eq(0)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(0).text() == "X" &&
      boxes.eq(8).text() == "X" &&
      boxes.eq(4).text() == ""
    ) {
      boxes
        .eq(4)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(2).text() == "X" &&
      boxes.eq(4).text() == "X" &&
      boxes.eq(6).text() == ""
    ) {
      boxes
        .eq(6)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(2).text() == "X" &&
      boxes.eq(6).text() == "X" &&
      boxes.eq(4).text() == ""
    ) {
      boxes
        .eq(4)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(4).text() == "X" &&
      boxes.eq(6).text() == "X" &&
      boxes.eq(2).text() == ""
    ) {
      boxes
        .eq(2)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(3).text() == "X" &&
      boxes.eq(4).text() == "X" &&
      boxes.eq(5).text() == ""
    ) {
      boxes
        .eq(5)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(4).text() == "X" &&
      boxes.eq(5).text() == "X" &&
      boxes.eq(3).text() == ""
    ) {
      boxes
        .eq(3)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(3).text() == "X" &&
      boxes.eq(5).text() == "X" &&
      boxes.eq(4).text() == ""
    ) {
      boxes
        .eq(4)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(1).text() == "X" &&
      boxes.eq(4).text() == "X" &&
      boxes.eq(7).text() == ""
    ) {
      boxes
        .eq(7)
        .text("O")
        .addClass("o");
    } else if (
      boxes.eq(7).text() == "X" &&
      boxes.eq(4).text() == "X" &&
      boxes.eq(1).text() == ""
    ) {
      boxes
        .eq(1)
        .text("O")
        .addClass("o");
    } else {
      //Note that the previous code checks for for 2 X's and fills a third box with O. Well, this block of code kind of starts the process by randomly checking for an empty box and filling with O. That is, this doesn't depend finding X's before filling in O's
      boxes.each(function(idx, value) {
        let rand = Math.floor(Math.random() * 9);
        if (boxes.eq(rand).text() == "") {
          boxes
            .eq(rand)
            .text("O")
            .addClass("o");
          return false;
        } else if (value.innerHTML == "") {
          boxes
            .eq(idx)
            .text("O")
            .addClass("o");
          return false;
        }
      });
    }
  } else {
    alert("A choice was made here already!");
  }
  // This checks if boxes are filled with X's and displays a victory message if three boxes are found to be filled with "X"
  if (
    (boxes.eq(0).text() == "X" &&
      boxes.eq(1).text() == "X" &&
      boxes.eq(2).text() == "X") ||
    (boxes.eq(3).text() == "X" &&
      boxes.eq(4).text() == "X" &&
      boxes.eq(5).text() == "X") ||
    (boxes.eq(6).text() == "X" &&
      boxes.eq(7).text() == "X" &&
      boxes.eq(8).text() == "X") ||
    (boxes.eq(0).text() == "X" &&
      boxes.eq(3).text() == "X" &&
      boxes.eq(6).text() == "X") ||
    (boxes.eq(2).text() == "X" &&
      boxes.eq(5).text() == "X" &&
      boxes.eq(8).text() == "X") ||
    (boxes.eq(0).text() == "X" &&
      boxes.eq(4).text() == "X" &&
      boxes.eq(8).text() == "X") ||
    (boxes.eq(2).text() == "X" &&
      boxes.eq(4).text() == "X" &&
      boxes.eq(6).text() == "X") ||
    (boxes.eq(1).text() == "X" &&
      boxes.eq(4).text() == "X" &&
      boxes.eq(7).text() == "X")
  ) {
    +score.textContent++; //Increment score for every win.
    audio1.play(); // Plays a sound after each win.
    let randText = Math.floor(Math.random() * 5);
    if (randText == 0) {
      //Randomly chooses a message to print out after every win.
      win.text("Leggo!");
    } else if (randText == 1) {
      win.text("Boss!");
    } else if (randText == 2) {
      win.text("Just can't get enough");
    } else if (randText == 3) {
      win.text("Stew!");
    } else {
      win.text("Soft!");
    }
    win.addClass("win-active");
    clear(); //clears box.
  } else if (
    // This checks if boxes are filled with O's and indicates a loss if three boxes are found to be filled with "O"
    (boxes.eq(0).text() == "O" &&
      boxes.eq(1).text() == "O" &&
      boxes.eq(2).text() == "O") ||
    (boxes.eq(3).text() == "O" &&
      boxes.eq(4).text() == "O" &&
      boxes.eq(5).text() == "O") ||
    (boxes.eq(6).text() == "O" &&
      boxes.eq(7).text() == "O" &&
      boxes.eq(8).text() == "O") ||
    (boxes.eq(0).text() == "O" &&
      boxes.eq(3).text() == "O" &&
      boxes.eq(6).text() == "O") ||
    (boxes.eq(2).text() == "O" &&
      boxes.eq(5).text() == "O" &&
      boxes.eq(8).text() == "O") ||
    (boxes.eq(0).text() == "O" &&
      boxes.eq(4).text() == "O" &&
      boxes.eq(8).text() == "O") ||
    (boxes.eq(2).text() == "O" &&
      boxes.eq(4).text() == "O" &&
      boxes.eq(6).text() == "O") ||
    (boxes.eq(1).text() == "O" &&
      boxes.eq(4).text() == "O" &&
      boxes.eq(7).text() == "O")
  ) {
    +score.textContent--; //Removes a score after a loss.
    audio2.play(); // Plays a sound after a loss
    let randText1 = Math.floor(Math.random() * 5);
    if (randText1 == 0) {
      //Randomly chooses a message to output.
      lose.text("Getting there!");
    } else if (randText1 == 1) {
      lose.text("Try Again?");
    } else if (randText1 == 2) {
      lose.text("Think about it");
    } else if (randText1 == 3) {
      lose.text("Novice?");
    } else {
      lose.text("You can do it");
    }
    lose.addClass("lose-active");
    clear(); //Clears box
  }
}

let startGame = function() {
  //Starts game.
  start.css("display", "none"); //Removes start button
  restart.css("display", "block"); //After the start button is removed, restart button shows
  let firstStart = Math.floor(Math.random() * 2);
  //Randomly selects player to start
  if (firstStart == 0) {
    //Starting with center.
    begin.addClass("begin-active");
    let center = Math.floor(Math.random() * 2);
    //If firstStart is 0 (program starts), then this selects the position on the board for the program to start
    if (center == 0) {
      boxes
        .eq(4)
        .text("O")
        .addClass("o");
    } else {
      let rand = Math.floor(Math.random() * 9); //If "O" is placed in the center (index-4). Randomly chooses a box to place "O".
      boxes
        .eq(rand)
        .text("O")
        .addClass("o");
    }
    boxes.click(checkX); //Checks for X and fills the third space that is empty.
  } else {
    begin.text("You Start!");
    begin.addClass("begin-active");
    boxes.click(checkX); //Checks for X and fills the third space that is empty.
  }
};

// EVENTS
start.click(startGame); // Start game after click.
restart.click(clear); // After every click of restart, clear board

window.addEventListener("transitionend", () => {
  //Listens for any transition that ends and immediately removes the transition.
  begin.removeClass("begin-active");
  win.removeClass("win-active");
  lose.removeClass("lose-active");
});

// MAKE IS SUCH THAT THE PERSON CAN SWITCH FROM 1 PLAYER TO 2 PLAYERS AND WHEN THIS SWITCH OCCURS --- JUST CHANGE THE SRC ATTRIBUTE OF THE SCRIPT TAG.
