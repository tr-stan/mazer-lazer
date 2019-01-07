class Room {
	constructor(forward, left, right, bg_img) {
		this.forward = forward;
		this.left = left;
		this.right = right;
		this.bg_img = bg_img;
	}

}
// create array to hold all room objects
let rooms = [];

// create room objects to fill array (rooms in maze)
let room1 = new Room("room2", "room5", "deathTrap");
console.log(room1);
rooms.push(room1);
console.log(rooms);
let currentRoom = room1;

$("#left").click(function() {
	$("#currentRoom").css({background: 'url("./dungeon-hall-2.jpg") center center no-repeat'});
})
$("#forward").click(function() {
	console.log(currentRoom.forward);
})
$("#right").click(function() {
	console.log(currentRoom.right);
})

