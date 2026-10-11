{
	onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Frost Fist boost');
				return this.chainModify([4915, 4096]);
			}
		},
		onSourceDamagingHit(damage, target, source, move) {
			if (move.flags['punch']) {
				this.debug('Frost Fist Freeze');
				if (this.randomChance(2, 10)) {
					target.trySetStatus('frz', source);
				}
			}
		},
		flags: {},
		name: "Frost Fist",
		rating: 3,
}