{
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Ice') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Snowglomerate');
				}
				return null;
			}
		},
		flags: {},
		name: "Snowglomerate",
		rating: 3,
	}