//AI purposed to manage a single screep room
class ScreepHive {
    constructor(hiveRoom) {
	//Static hive data
	this.hiveRoom = hiveRoom;
	this.spawns = findSpawns();
	this.sources = findSources();
	this.minerals = findMinerals();
	this.exits = findExits();

	//Dynamic hive data
	this.screeps;
	this.structs;
	this.tombstones;

	//Hive attributes
	//TODO
    }

    // STATIC HIVE DATA FUNCTIONS //
    findSpawns() {
	return this.hiveRoom.find(FIND_MY_SPAWNS);
    }

    findSources() {
	return this.hiveRoom.find(FIND_SOURCES);
    }

    findMinerals() {
	return this.hiveRoom.find(FIND_MINERALS);
    }

    findExits() {
	return this.hiveRoom.find(FIND_EXIT);
    }

    // DYNAMIC HIVE DATA FUNCTIONS //
    updateHiveData() {
	//TODO - Decide on tick intervals
	this.screeps = this.findScreeps();
	this.structs = this.findStructs();
	this.tombstones = this.findTombstones();
    }
}
