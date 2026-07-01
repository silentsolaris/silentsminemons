{
    onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bullet']) {
				this.debug('Mortar boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Mortar",
		rating: 3.5,
}