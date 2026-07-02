{
        num: 42023,
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		name: "Splintered Axe",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1},
		self: {
			onHit(source) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('gmaxsteelsurge');
				}
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
}