// initially hide certain elements
$("#forward").hide();
$("#left").hide();
$("#right").hide();
$("#dead").hide();

//create class for making room objects
class Room {
    constructor(name, background, clue) {
        this.name = name;
        this.background = background;
    }

    forwardClick() {
        currentRoom = this.forward;
        $("#current-room").css({ "background-image": "url(" + this.forward.background + ")" });
    }
    leftClick() {
        currentRoom = this.left;
        $("#current-room").css({ "background-image": "url(" + this.left.background + ")" });
    }
    rightClick() {
        currentRoom = this.right;
        $("#current-room").css({ "background-image": "url(" + this.right.background + ")" });
    }

}

// create object for each room in maze, connect the rooms according to desired maze logic
let start = new Room("start", "./start-page.jpg")
let room1 = new Room("room1", "./dungeon-intersection.jpg", );
let room2 = new Room("room 2", "./dungeon-hall-2.jpg");
let room3 = new Room("room 3", "./dungeon-intersection.jpg");
let room4 = new Room("room 4", "./dungeon-hall-2.jpg");
let room5 = new Room("room 5", "./dungeon-intersection.jpg");
let room6 = new Room("room 6", "./dungeon-hall-2.jpg");
let cipher = new Room("cipher", "./chest.jpg");
let death = new Room("death", "./death-pit.jpg");
let victory = new Room("victory", "./treasure.jpg");
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

let currentRoom = start;
// create click function to start the game from start page
$("#start-game").click(function() {
    currentRoom = room1;
    $("#current-room").css({ "background-image": "url(" + room1.background + ")" });
    $("#start-game").hide()
    $("#forward").show();
    $("#left").show();
    $("#right").show();
})

$("#retry").click(function() {
    currentRoom = room1;
    $("#current-room").css({ "background-image": "url(" + room1.background + ")" });
    $("#dead").hide()
    $("#forward").show();
    $("#left").show();
    $("#right").show();
})

// create function for each time the player clicks the 'forward' button
$("#forward").click(function() {
    currentRoom.forwardClick();
    console.log(`Player clicked forward. Current room is ${currentRoom.name}`);
    if (currentRoom === death) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
        $("#dead").show();
    } else if (currentRoom === victory) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
    }
})

// create function for each time the player clicks the 'left' button
$("#left").click(function() {
    currentRoom.leftClick();
    console.log(`Player clicked left. Current room is ${currentRoom.name}`);
    if (currentRoom === death) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
        $("#dead").show();
    } else if (currentRoom === victory) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
    }
})

// create function for each time the player clicks the 'right' button
$("#right").click(function() {
    currentRoom.rightClick();
    console.log(`Player clicked right. Current room is ${currentRoom.name}`);
    if (currentRoom === death) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
        $("#dead").show();
    } else if (currentRoom === victory) {
        $("#forward").hide();
        $("#left").hide();
        $("#right").hide();
    }
})

console.log(`Current room is ${currentRoom.name}`)