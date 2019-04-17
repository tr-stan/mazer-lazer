// initially hide certain elements
$("#forward").hide();
$("#left").hide();
$("#right").hide();
$("#first").hide();
$("#second").hide();
$(".stat").hide();
$("#instructions").hide();
$("#lose-life").hide();
$("#game-over").hide();
$("#winner").hide();

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
let lives = 5;
let guesses = 3;
let numGems = 0;
let currentRoom = {};

// create class for making room objects
class Room {
    constructor(name, background, firstGem, secondGem, firstClicked, secondClicked) {
        this.name = name;
        this.background = background;
        this.firstGem = firstGem;
        this.secondGem = secondGem;
        this.firstClicked = firstClicked;
        this.secondClicked = secondClicked;
    }
    // click functions
    forwardClick() {
        $("#current-room").css({ "background-image": "none" });
        currentRoom = this.forward;
        $("#current-room").css({ "background-image": "url(" + currentRoom.background + ")" });
        if (currentRoom.firstClicked === false) {
            $("#first").show();
        }
        if (currentRoom.secondClicked === false) {
            $("#second").show();
        }
    }
    leftClick() {
        $("#current-room").css({ "background-image": "none" });
        currentRoom = this.left;
        $("#current-room").css({ "background-image": "url(" + this.left.background + ")" });
        if (currentRoom.firstClicked === false) {
            $("#first").show();
        }
        if (currentRoom.secondClicked === false) {
            $("#second").show();
        }
    }
    rightClick() {
        $("#current-room").css({ "background-image": "none" });
        currentRoom = this.right;
        $("#current-room").css({ "background-image": "url(" + this.right.background + ")" });
        if (currentRoom.firstClicked === false) {
            $("#first").show();
        }
        if (currentRoom.secondClicked === false) {
            $("#second").show();
        }
    }

}

// create object for each room in maze, connect the rooms according to desired maze logic
let room1 = new Room("room1", "assets/images/mid-hall.png");
let room2 = new Room("room 2", "assets/images/starry-hall.png", "good", "bad", false, false);
let room3 = new Room("room 3", "assets/images/mid-hall.png", "bad", "good", false, false);
let room4 = new Room("room 4", "assets/images/starry-hall.png", "bad", "bad", false, false);
let room5 = new Room("room 5", "assets/images/mid-hall.png", "bad", "good", false, false);
let room6 = new Room("room 6", "assets/images/two-blues.png", "good", "bad", false, false);
let cipher = new Room("cipher", "assets/images/dark-sides.png");
let death = new Room("death", "assets/images/die-faster.gif?Math.random()");
let victory = new Room("victory", "assets/images/spaceship-in-space.gif");
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

currentRoom = room1;

// click function to start the game from start page
$("#enter").click(function() {
    currentRoom = room1;
    $("#current-room").css({ "background-image": "url(" + room1.background + ")" });
    $("#start-game").hide()
    $("#forward").show();
    $("#left").show();
    $("#right").show();
    $(".stat").show();
    $("#life-count").append("<img src='assets/images/life.png'><img src='assets/images/life.png'><img src='assets/images/life.png'><img src='assets/images/life.png'><img src='assets/images/life.png'>")
})

// modal for instructions
$("#info").click(function() {
    $("#instructions").fadeIn();
    $("#x").click(function() {
        $("#instructions").fadeOut();
    })
})

// click function to restart game after death
$("#retry").click(function() {
    currentRoom = room1;
    $("#current-room").css({ "background-image": "url(" + room1.background + ")" });
    $("#lose-life").hide()
    $("#forward").show();
    $("#left").show();
    $("#right").show();
    $("#gem-count").show();
})

// function for each time the player clicks the 'forward' button
$("#forward").click(function() {
    currentRoom.forwardClick();
    console.log(`Player clicked forward. Current room is ${currentRoom.name}`);
    if (currentRoom === cipher) {
        $("#first").hide();
        $("#second").hide();
        if (numGems < 4) {
            console.log("You need 4 gems to proceed forward.")
            $("#forward").hide();
        } else {
            $("#forward").show();
        }
    } else if (currentRoom === room1) {
        $("#first").hide();
        $("#second").hide();
    } else if (currentRoom === death) {
        $("#gem-count").hide();
        $("#current-room").css({ "background-image": `url('assets/images/die-faster.gif#${Math.random()}')` });
        lives--;
        $("#life-count img:first-child").remove()
        $("#first").hide();
        $("#second").hide();
        if (lives <= 0) {
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
            $("#lose-life").show();
        }
    } else if (currentRoom === victory) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
        $("#first").hide();
        $("#second").hide();
        $("#gem-count").hide();
        $("#winner").show();
    }
})

// function for each time the player clicks the 'left' button
$("#left").click(function() {
    currentRoom.leftClick();
    $("#forward").show();
    console.log(`Player clicked left. Current room is ${currentRoom.name}`);
    if (currentRoom === cipher) {
        $("#first").hide();
        $("#second").hide();
        if (numGems < 4) {
            console.log("You need 4 gems to proceed forward.")
            $("#forward").hide();
        } else {
            $("#forward").show();
        }
    } else if (currentRoom === room1) {
        $("#first").hide();
        $("#second").hide();
    } else if (currentRoom === death) {
        $("#gem-count").hide();
        $("#current-room").css({ "background-image": `url('assets/images/die-faster.gif#${Math.random()}')` });
        lives--;
        $("#life-count img:first-child").remove()
        $("#first").hide();
        $("#second").hide();
        if (lives <= 0) {
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
            $("#lose-life").show();
        }
    } else if (currentRoom === victory) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
        $("#first").hide();
        $("#second").hide();
        $("#gem-count").hide();
        $("#winner").show();
    }
})

// function for each time the player clicks the 'right' button
$("#right").click(function() {
    currentRoom.rightClick();
    $("#forward").show();
    console.log(`Player clicked right. Current room is ${currentRoom.name}`);
    if (currentRoom === cipher) {
        $("#first").hide();
        $("#second").hide();
        if (numGems < 4) {
            console.log("You need 4 gems to proceed forward.")
            $("#forward").hide();
        } else {
            $("#forward").show();
        }
    } else if (currentRoom === room1) {
        $("#first").hide();
        $("#second").hide();
    } else if (currentRoom === death) {
        $("#gem-count").hide();
        $("#current-room").css({ "background-image": `url('assets/images/die-faster.gif#${Math.random()}')` });
        lives--;
        $("#life-count img:first-child").remove()
        $("#first").hide();
        $("#second").hide();
        if (lives <= 0) {
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
            $("#lose-life").show();
        }
    } else if (currentRoom === victory) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
        $("#first").hide();
        $("#second").hide();
        $("#gem-count").hide();
        $("#winner").show();
    }
})

// function for each time player clicks on a gem item
$("#first").click(function() {
    currentRoom.firstClicked = true;
    if (currentRoom.firstGem === "good") {
        numGems++;
        $("#gem-count").append("<img src='assets/images/diamond.png'>")
        $(this).hide();
        console.log(`gems: ${numGems}`)
    } else {
        lives--;
        $("#life-count img:first-child").remove()
        $(this).hide();
        $(this).removeClass("bad");
        console.log(`lives: ${lives}`)
        if (lives <= 0) {
            $("#current-room").hide();
            $("#forward").hide();
            $("#left").hide();
            $("#right").hide();
            $("#game-over").show();
        }
    }
})

$("#second").click(function() {
    currentRoom.secondClicked = true;
    if (currentRoom.secondGem === "good") {
        numGems++;
        $("#gem-count").append("<img src='assets/images/diamond.png'>")
        $(this).hide();
        console.log(`gems: ${numGems}`)
    } else {
        lives--;
        $("#life-count img:first-child").remove()
        $(this).hide();
        $(this).removeClass("bad");
        console.log(`lives: ${lives}`)
        if (lives <= 0) {
            $("#current-room").hide();
            $("#forward").hide();
            $("#left").hide();
            $("#right").hide();
            $("#game-over").show();
        }
    }
})

$("#reset").click(function() {
    $("#current-room").css({ "background-image": "url('assets/images/start-screen.png')" });
    $("#game-over").hide();
    $("#current-room").show();
    $("#start-game").show();
    $("#first").hide();
    $("#second").hide();
    $("#gem-count").empty();
    $(".stat").hide();
    $(room2.firstClicked = false);
    $(room2.secondClicked = false);
    $(room3.firstClicked = false);
    $(room3.secondClicked = false);
    $(room4.firstClicked = false);
    $(room4.secondClicked = false);
    $(room5.firstClicked = false);
    $(room5.secondClicked = false);
    $(room6.firstClicked = false);
    $(room6.secondClicked = false);
    lives = 5;
    numGems = 0;
})