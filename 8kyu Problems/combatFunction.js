// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
	if (damage > health) {
		return (health = 0);
	} else {
		return health - damage;
	}
}

// Better way

function combat(health, damage) {
	return damage > health ? 0 : health - damage;
}
