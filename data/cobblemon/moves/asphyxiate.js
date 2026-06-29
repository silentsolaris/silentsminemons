{
	num: 42011,
    	accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Asphyxiate",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Flying') return 1;
		},
        basePowerCallback(pokemon, target, move) {
			if (pokemon.side.sideConditions['tailwind']) {
				this.debug('BP doubled in tailwind');
				return move.basePower * 1.5;
			},
        },
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
}