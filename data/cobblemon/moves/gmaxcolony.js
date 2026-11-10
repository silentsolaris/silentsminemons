{
    num: 42720,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Past",
		name: "G-Max Colony",
		pp: 5,
		priority: 0,
		flags: {},
		isMax: "Isoptereign",
		self: {
			onHit(source, target, effect) {
				for (const side of source.side.foeSidesWithConditions()) {
					if (item) {
				        this.add('-enditem', target, item.name, '[from] move: G-Max Colony', `[of] ${source}`);
			        }
				}
			},
		},
		target: "adjacentFoe",
		type: "Bug",
		contestType: "Cool",
}