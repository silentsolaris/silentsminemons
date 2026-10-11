{
	onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['slicing']) {
				this.debug('Toxic Blade boost');
				return this.chainModify([4915, 4096]);
			}
		},
		onSourceDamagingHit(damage, target, source, move) {
			if (move.flags['slicing']) {
				this.debug('Toxic Blade Poison');
				if (this.randomChance(2, 50)) {
					target.trySetStatus('tox', source);
				}
			}
		},
		flags: {},
		name: "Toxic Blade",
		rating: 3,
}