{
    num: 42029,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "G-Max Countdown",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Jesteratus",
		self: {
			onHit(source, target, effect) {
				for (const pokemon of source.foes()) {
					if (!pokemon.volatiles['dynamax']) pokemon.addVolatile('perishsong', source, effect);
				}
			},
		},
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Beautiful",
}