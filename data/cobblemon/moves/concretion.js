{
    num: 4753,
		accuracy: true,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Concretion",
		pp: 5,
		priority: 0,
		flags: { snatch: 1, heal: 1, metronome: 1 },
		heal: [1, 2],
		onHit(pokemon) {
				pokemon.weighthg = Math.max(1, pokemon.weighthg + 500);
				this.add('-start', pokemon, 'Concretion');
		},
		target: "self",
		type: "Rock",
		zMove: { effect: 'clearnegativeboost' },
		contestType: "Smart",
}