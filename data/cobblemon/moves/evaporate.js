{
    num: 420016,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Evaporate",
		pp: 20,
		priority: 1,
		flags: { protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, metronome: 1},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Evaporate');
			},
			onTryMovePriority: -1,
			onTryMove(pokemon, target, move) {
				if (move.type === 'Water') {
					this.add('-activate', pokemon, 'move: Evaporate');
					this.attrLastMove('[still]');
					return false;
				}
			},
		},
		target: "normal",
		type: "Fire",
		zMove: { boost: { spd: 2 } },
		contestType: "Clever",
}