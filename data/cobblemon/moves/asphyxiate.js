{
	num: 420016,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Asphyxiate",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		onTryHit(pokemon) {
			pokemon.side.removeSideCondition('tailwind');
		},
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
}