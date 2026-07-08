{
        num: 299,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Chaos Kick",
		pp: 10,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
        onHit(target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		target: "normal",
		type: "Dark",
		contestType: "Cool",
}