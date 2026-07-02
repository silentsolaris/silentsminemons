{
	num: 420016,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Asphyxiate",
		pp: 15,
		priority: 0,
		flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
		condition: {
			duration: 2,
			onStart(target) {
				this.add('-start', target, 'Asphyxiate', '[silent]');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.dex.moves.get(moveSlot.id).flags['sound']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (!move.isZOrMaxPowered && move.flags['sound']) {
					this.add('cant', pokemon, 'move: Asphyxiate');
					return false;
				}
			},
			onModifyMove(move, pokemon, target) {
				if (!move.isZOrMaxPowered && move.flags['sound']) {
					this.add('cant', pokemon, 'move: Asphyxiate');
					return false;
				}
			},
			onResidualOrder: 22,
			onEnd(target) {
				this.add('-end', target, 'Asphyxiate', '[silent]');
			},
		},
		secondary: {
			chance: 100,
			onHit(target) {
				target.addVolatile('throatchop');
			},
		},
		onTryHit(pokemon) {
			pokemon.side.removeSideCondition('tailwind');
		},
		target: "normal",
		type: "Dark",
		contestType: "Clever",
}