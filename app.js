// initially hide certain elements
$("#game-over").hide();
$("#forward").hide();
$("#left").hide();
$("#right").hide();
$("#dead").hide();
$("#first").hide();
$("#second").hide();

// create cipher and answer
// let cipherText = "ZDRA HT OZZ";
// let answer = "LOVE IS ALL";
// create clue variables, if true then listed in legend on screen for the room w/ cipher in it
// let letterZ = false;
// let letterD = false;
// let letterR = false;
// let letterA = false;
// let letterH = false;
// let letterT = false;
// let letterO = false;


// create lives variable for booby traps and falls in death pit, guesses for cipher guesses before game over
let lives = 9;
let guesses = 3;
let numClues = 0;

// create class for making room objects
class Room {
    constructor(name, background, firstClue, secondClue, firstClicked, secondClicked) {
        this.name = name;
        this.background = background;
        this.firstClue = firstClue;
        this.secondClue = secondClue;
        this.firstClicked = firstClicked;
        this.secondClicked = secondClicked;
    }
    // click functions
    forwardClick() {
        currentRoom = this.forward;
        $("#current-room").css({ "background-image": "url(" + this.forward.background + ")" });
        if (currentRoom.firstClicked === false) {
            $("#first").show();
            $("#first").addClass(this.forward.firstClue);
        }
        if (currentRoom.secondClicked === false) {
            $("#second").show();
            $("#second").addClass(this.forward.secondClue);
        }
    }
    leftClick() {
        currentRoom = this.left;
        $("#current-room").css({ "background-image": "url(" + this.left.background + ")" });
         if (currentRoom.firstClicked === false) {
            $("#first").show();
            $("#first").addClass(this.left.firstClue);
        }
        if (currentRoom.secondClicked === false) {
            $("#second").show();
            $("#second").addClass(this.left.secondClue);
        }
    }
    rightClick() {
        currentRoom = this.right;
        $("#current-room").css({ "background-image": "url(" + this.right.background + ")" });
         if (currentRoom.firstClicked === false) {
            $("#first").show();
            $("#first").addClass(this.right.firstClue);
        }
        if (currentRoom.secondClicked === false) {
            $("#second").show();
            $("#second").addClass(this.right.secondClue);
        }
    }

}

// create object for each room in maze, connect the rooms according to desired maze logic
let room1 = new Room("room1", "images/mid-hall.png");
let room2 = new Room("room 2", "images/starry-hall.png", "good", "bad", false, false);
let room3 = new Room("room 3", "images/mid-hall.png", "bad", "good", false, false);
let room4 = new Room("room 4", "images/starry-hall.png", "bad", "bad", false, false);
let room5 = new Room("room 5", "images/mid-hall.png", "bad", "good", false, false);
let room6 = new Room("room 6", "images/two-blues.png", "good", "bad", false, false);
let cipher = new Room("cipher", "images/dark-sides.png");
let death = new Room("death", "images/laser-beam.jpg");
let victory = new Room("victory", "images/utopia.jpg");
// declare properties of each room object to establish maze sequence logic
room1.forward = room2;
room1.left = room5;
room1.right = death;
room2.forward = room3;
room2.left = death;
room2.right = room5;
room3.forward = room4;
room3.left = death;
room3.right = room1;
room4.forward = death;
room4.left = cipher;
room4.right = room2;
room5.forward = room6;
room5.left = room3;
room5.right = cipher;
room6.forward = cipher;
room6.left = room5;
room6.right = death;
cipher.forward = victory;
cipher.left = room4;
cipher.right = room6;

let currentRoom = room1;

// click function to start the game from start page
$("#start-game").click(function() {
    currentRoom = room1;
    $("#current-room").css({ "background-image": "url(" + room1.background + ")" });
    $("#start-game").hide()
    $("#forward").show();
    $("#left").show();
    $("#right").show();
})

// click function to restart game after death
$("#retry").click(function() {
    currentRoom = room1;
    $("#current-room").css({ "background-image": "url(" + room1.background + ")" });
    $("#dead").hide()
    $("#forward").show();
    $("#left").show();
    $("#right").show();
})

// function for each time the player clicks the 'forward' button
$("#forward").click(function() {
    currentRoom.forwardClick();
    console.log(`Player clicked forward. Current room is ${currentRoom.name}`);
    if (currentRoom === cipher) {
        if (numClues < 4) {
            $("#forward").hide();
        } else {
            $("#forward").show();
        }
    } else if (currentRoom === room1) {
        $("#first").hide();
        $("#second").hide();
    } else if (currentRoom === death) {
        lives--;
        $("#first").hide();
        $("#second").hide();
        if (lives === 0) {
            $("#current-room").hide();
            $("#forward").hide();
            $("#left").hide();
            $("#right").hide();
            $("#game-over").show();
        } else {
            console.log(lives);
            $("#forward").hide();
            $("#left").hide();
            $("#right").hide();
            $("#dead").show();
        }
    } else if (currentRoom === victory) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
        $("#first").hide();
        $("#second").hide();
    }
})

// function for each time the player clicks the 'left' button
$("#left").click(function() {
    currentRoom.leftClick();
    $("#forward").show();
    console.log(`Player clicked left. Current room is ${currentRoom.name}`);
    if (currentRoom === cipher) {
        if (numClues < 4) {
            $("#forward").hide();
        } else {
            $("#forward").show();
        }
    } else if (currentRoom === room1) {
        $("#first").hide();
        $("#second").hide();
    } else if (currentRoom === death) {
        lives--;
        $("#first").hide();
        $("#second").hide();
        if (lives === 0) {
            $("#current-room").hide();
            $("#forward").hide();
            $("#left").hide();
            $("#right").hide();
            $("#game-over").show();
        } else {
            console.log(lives);
            $("#forward").hide();
            $("#left").hide();
            $("#right").hide();
            $("#dead").show();
        }
    } else if (currentRoom === victory) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
        $("#first").hide();
        $("#second").hide();
    }
})

// function for each time the player clicks the 'right' button
$("#right").click(function() {
    currentRoom.rightClick();
    $("#forward").show();
    console.log(`Player clicked right. Current room is ${currentRoom.name}`);
    if (currentRoom === cipher) {
        if (numClues < 2) {
            $("#forward").hide();
        } else {
            $("#forward").show();
        }
    } else if (currentRoom === room1) {
        $("#first").hide();
        $("#second").hide();
    } else if (currentRoom === death) {
        lives--;
        $("#first").hide();
        $("#second").hide();
        if (lives === 0) {
            $("#current-room").hide();
            $("#forward").hide();
            $("#left").hide();
            $("#right").hide();
            $("#game-over").show();
        } else {
            console.log(lives);
            $("#forward").hide();
            $("#left").hide();
            $("#right").hide();
            $("#dead").show();
        }
    } else if (currentRoom === victory) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
        $("#first").hide();
        $("#second").hide();
    }
})

// function for each time player clicks on a clue item
$("#first").click(function() {
    currentRoom.firstClicked = true;
    if ($(this).hasClass("good")) {
        numClues++;
        $(this).hide();
        $(this).removeClass("good");
        console.log(`clues: ${numClues}`)
    } else {
        lives--;
        $(this).hide();
        $(this).removeClass("bad");
        console.log(`lives: ${lives}`)
    }
})

$("#second").click(function() {
    currentRoom.secondClicked = true;
    if ($(this).hasClass("good")) {
        numClues++;
        $(this).hide();
        $(this).removeClass("good");
        console.log(`clues: ${numClues}`)
    } else {
        lives--;
        $(this).hide();
        $(this).removeClass("bad");
        console.log(`lives: ${lives}`)
    }
})