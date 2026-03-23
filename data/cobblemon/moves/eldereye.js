{
	num: 42001,
    	accuracy: 80,
		basePower: 100,
		category: "Special",
		name: "Elder Eye",
		pp: 5,
		priority: 1,
		flags: { protect: 1, mirror: 1, metronome: 1, pulse: 1 },
		onHit(target, source, move) {
			this.add(source.lastMove + " was " + source.lastMove.type + " tyoe.");
			if (source.lastMove.type !== 'Electric') return;
			for (const pokemon of this.getAllActive()) {
				if (pokemon === source) continue;
				pokemon.addVolatile('electrify');
			}
		},
		target: "normal",
		type: "Rock",
		contestType: "Clever",
}