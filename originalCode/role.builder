var utilRoleFunctions = require('util.roleFunctions');
var roleUpgrader = require('role.upgrader');

module.exports = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('Withdrawing');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('Building');
	    }

	    if(creep.memory.building) { 
	        if(!utilRoleFunctions.build(creep)) roleUpgrader.run(creep);
	    }
	    else { //If the creep is not in building mode, locate energy from the containers near spawn
	        var targetIdx = Memory.roleDefinitions[creep.memory.role].target;
	        var target = Memory.rooms[creep.room.name].flags[targetIdx];
	        utilRoleFunctions.withdraw(creep, Game.flags[target], Game.flags[target]); //Game.spawns.Spawn1
	    }
	}
};
