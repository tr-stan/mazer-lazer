class Room {
	constructor(num, forward, left, right) {
		this.num = num;
		this.forward = forward;
		this.left = left;
		this.right = right;
	}
}

let currentRoom = new Room(1, "room 2", "room 5", "dead");

$("#left").click(function() {
	console.log(currentRoom.left);
})
$("#forward").click(function() {
	console.log(currentRoom.forward);
})
$("#right").click(function() {
	console.log(currentRoom.right);
})

