class Room {
	constructor(num, forward, left, right) {
		this.num = num;
		this.forward = forward;
		this.left = left;
		this.right = right;
	}
}
// create array to hold all room objects
let rooms = []
for (let i=0; i<9; i++) {
rooms[i] = new Room(i, `room ${i+1}`, `room ${i+2}`, "dead");
}
console.log(rooms)
$("#left").click(function() {
	console.log(currentRoom.left);
})
$("#forward").click(function() {
	console.log(currentRoom.forward);
})
$("#right").click(function() {
	console.log(currentRoom.right);
})

