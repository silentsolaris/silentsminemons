{
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