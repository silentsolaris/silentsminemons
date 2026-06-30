{
        num: 560333,
		accuracy: 95,
		basePower: 80,
		category: "Special",
		name: "Backburn",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, defrost: 1 },
		onEffectiveness(typeMod, target, type) {
			if (type === 'Fire') return 1;
		},
		secondary: {
			chance: 15,
			status: 'brn',
		},
		target: "allAdjacent",
		type: "Fire",
		contestType: "Clever",
}