{
		onChargeMove(pokemon, target, move) {
			this.add("charge yourself, NOW!!!");
			this.add('-activate', pokemon, 'ability: Mentor', '[msg]self');
			return false;
		},

		onAllyChargeMove(ally, target, move) {
			this.add(ally);
			if (!ally || ally.fainted || move.category === 'Status') return;

			this.add('-activate', pokemon, 'ability: Mentor', ally, '[msg]ally');
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