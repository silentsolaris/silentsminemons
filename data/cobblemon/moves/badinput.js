{
	num: 42001,
    	accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Bad Input",
		pp: 5,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) < pokemon.getStat('spa', false, true)) move.category = 'Special';
		},
		onAfterMoveSecondary(target, source, move) {
			let typelist = [
				"Normal","Fire","Water","Electric","Grass","Ice","Fighting",
				"Poison","Ground","Flying","Psychic","Bug","Rock","Ghost",
				"Dragon","Dark","Steel","Fairy"
			];

			let type1 = this.sample(typelist);
			typelist.splice(typelist.indexOf(type1), 1);

			if (this.randomChance(1, 18)) {
				source.setType(type1);
				this.add('-start', source, 'typechange', type1);
				return;
			}

			let type2 = this.sample(typelist);
			source.setTypes([type1, type2]);
			this.add('-start', source, 'typechange', type1 + '/' + type2);
		},
		target: "normal",
		type: "Normal",
		contestType: "Clever",
}