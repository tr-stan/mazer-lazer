class Room {
    constructor(name, background) {
        this.name = name;
        
    }
    forwardClick() {
    	currentRoom = this.forward
    }
    leftClick() {
        currentRoom = this.left
    }
    rightClick() {
    	currentRoom = this.right
    }
}


let start = new Room("start");
let room2 = new Room("room 2");
let room3 = new Room("room 3");
let room4 = new Room("room 4");
let room5 = new Room("room 5");
let room6 = new Room("room 6");
let cipher = new Room("cipher");
let death = new Room("death");
let victory = new Room("victory");
start.forward = room2;
start.left = room5;
start.right = death;
room2.forward = room3;
room2.left = death;
room2.right = room5;
room3.forward = room4;
room3.left = death;
room3.right = start;
room4.forward = death;
room4.left = cipher;
room4.right = room2;
room5.forward = room6;
room5.left = room3;
room5.right = cipher;
room6.forward = cipher;
room6.left = room5;
room6.right = death;
cipher.left = room4;
cipher.right = room6;


let currentRoom = start;
console.log(currentRoom.name);

$("#forward").click(function() {
	currentRoom.forwardClick();
	console.log(`Player clicked forward. Current room is ${currentRoom.name}`);
})
$("#left").click(function() {
	currentRoom.leftClick();
	console.log(`Player clicked left. Current room is ${currentRoom.name}`);
})
$("#right").click(function() {
	currentRoom.rightClick();
	console.log(`Player clicked right. Current room is ${currentRoom.name}`);
})
console.log(`Current room is ${currentRoom.name}`)