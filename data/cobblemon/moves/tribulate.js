{
		num: 906,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Tribulate",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, noassist: 1, failcopycat: 1, failmimic: 1},
		onModifyType(move, pokemon) {
			if (pokemon.species.name === 'haddoster-revealed') {
				move.type = 'Dark';
			}
		},
        onHit(target, source, move) {
			if (pokemon.species.name === 'haddoster-revealed') {
				let damage = this.actions.getDamage(source, target, move);
				this.heal(Math.ceil(damage * 0.5), source, target, 'drain');
			}
		},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (pokemon.species.name !== 'haddoster-revealed') {
					target.addVolatile('confusion', source, move);
				}
			},
		},
		target: "normal",
		type: "Normal",
	}