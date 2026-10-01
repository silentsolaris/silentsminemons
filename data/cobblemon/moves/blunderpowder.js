{
	num: 42002,
    	accuracy: 85,
		basePower: 100,
		category: "Physical",
		name: "Blunder Powder",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, bullet: 1 },
		secondary: {
			chance: 30,
			status: 'tox',
		},
		onHit(target, source, move) {
			for (const ally of target.adjacentAllies()) {
				this.damage(ally.baseMaxhp / 16, ally, source, this.dex.conditions.get('Flame Burst'));
				if (this.randomChance(3, 10)) {
					ally.trySetStatus('psn', source);
				}
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			for (const ally of target.adjacentAllies()) {
				this.damage(ally.baseMaxhp / 16, ally, source, this.dex.conditions.get('Flame Burst'));
				if (this.randomChance(3, 10)) {
					ally.trySetStatus('psn', source);
				}
			}
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Grass",
		contestType: "Cool",
}