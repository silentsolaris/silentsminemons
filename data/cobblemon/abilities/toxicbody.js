{
    onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('tox', target);
				}
			}
		},
		flags: {},
		name: "Toxic Body",
		rating: 1.5,
    }