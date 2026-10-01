{
	num: 42012,
    	accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Soulfire Blade",
		pp: 5,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1 },
		onHit(target, source) {
			if (target.status !== 'psn' || target.status !== 'tox') return;
    		target.cureStatus();
    		target.trySetStatus("brn", source);
		},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Poison",
		contestType: "Cool",
}