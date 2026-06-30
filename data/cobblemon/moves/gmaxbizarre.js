{
    num: 42020,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "G-Max Bizarre",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Cephcery",
		self: {
			onHit(source, target, effect) {
				for (const pokemon of source.foes()) {
					if (!pokemon.volatiles['dynamax']) pokemon.addVolatile('taunt', source, effect);
				}
			},
		},
		target: "adjacentFoe",
		type: "Psychic",
		contestType: "Cool",
}