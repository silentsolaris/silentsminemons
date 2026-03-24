{
		onChargeMove(pokemon, target, move) {
			this.add('-activate', pokemon, 'ability: Mentor');
			return false;
		},

		onAllyChargeMove(ally, target, move) {
			const pokemon = this.effectState.target;
			if (!pokemon || pokemon.fainted || move.category === 'Status') return;

			this.add('-activate', pokemon, 'ability: Mentor', ally);
			return false;
		},

		onBasePower(basePower, attacker, defender, move) {
			if (!move.flags['charge']) return;
			this.debug('Mentor boost');
			return this.chainModify(1.2);
		},
		flags: {},
		name: "Mentor",
		rating: 3,
	}