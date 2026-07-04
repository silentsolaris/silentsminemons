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
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				this.field.setpseudoWeather('trickroom');
			},
		},
		target: "adjacentFoe",
		type: "Fairy",
		contestType: "Beautiful",
}