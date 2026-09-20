{
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