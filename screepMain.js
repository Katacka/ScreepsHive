Memory.hiveRooms = {};

function refreshHives() {
    let rooms = Object.values(Game.rooms);
    for (let room in rooms) {
	//Create a hive instance for all non-hive rooms with valid spawns
	if (!Memory.hiveRooms.hasOwnProperty(room.name) && room.find(FIND_MY_SPAWNS)) {
	    let hive = new ScreepHive(room);
	    Memory.hiveRooms[room.name] = hive;
	}
    }
}

module.exports.loop = function() {
    if (Game.time % 10 === 0) refreshHives(); //Refresh every ten ticks
}
