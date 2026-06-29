{
    num: 839,
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		name: "Dream Needle",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1 },
		onBasePower(basePower, pokemon, target) {
			if (target.status === 'slp' || target.hasAbility('comatose') {
				return this.chainModify(2);
			}
		},
		secondary: {
			chance: 25,
			status: 'slp',
		},
		target: "normal",
		type: "Ghost",
        contestType: "Clever",
}