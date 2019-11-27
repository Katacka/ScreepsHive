//AI purposed to manage a single screep
class ScreepAgent {
    constructor(hive) {
	this.role = hive.assignRole();
	this.parts = hive.getParts(role); 
    }
    
    //Determine the micro-rewards for this individual per tick
    //Rewardable Actions:
    // -Harvests energy (source)
    // -Spends energy (container, build, upgrade, repair)
    // -Deals damage
    //Punishable Actions:
    // -Remains idle (no movement or action)
    // -Takes damage
    calcReward() {
	//TODO - Decide on reward interval
    }
}
