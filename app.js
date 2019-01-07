class Room {
    constructor(forward, left, right, bg_img) {
        this.forward = forward;
        this.left = left;
        this.right = right;
        this.bg_img = bg_img;
    }
    leftClick() {
        $("#currentRoom").css({ background: `url(${this.left}) center center no-repeat` });
    }
    rightClick() {
        $("#currentRoom").css({ background: `url(${this.right}) center center no-repeat` });
    }
    forwardClick() {
        $("#currentRoom").css({ background: 'url("./death-pit.jpg") center center no-repeat' });
    }
}
// create array to hold all room objects
let rooms = [];

// create room objects to fill array (rooms in maze)
let room1 = new Room("room2", "./dungeon-hall-2.jpg", "./dungeon-intersection.jpg");
console.log(room1);
rooms.push(room1);
console.log(rooms);
let currentRoom = room1;

$("#left").click(function() {
    room1.leftClick();
})
$("#forward").click(function() {
    room1.forwardClick();
})
$("#right").click(function() {
    room1.rightClick();
})