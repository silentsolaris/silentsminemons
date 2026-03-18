{
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move.type === 'Electric' || move.type === 'Water') {
				target.addVolatile('aquaring');
			}
		},
		flags: {},
		name: "Oxidize",
		rating: 3,
	}