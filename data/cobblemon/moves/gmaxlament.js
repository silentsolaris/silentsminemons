{
    num: 42030,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "G-Max Lament",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Plangiant",
		self: {
			onHit(source, target, effect) {
				for (const pokemon of source.foes()) {
					if (!pokemon.volatiles['dynamax']) target.addVolatile('healblock', source, effect);
				}
			},
		},
		target: "adjacentFoe",
		type: "Ghost",
		contestType: "Beautiful",
}