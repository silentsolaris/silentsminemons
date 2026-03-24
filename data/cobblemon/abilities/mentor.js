{
		onModifySpe(spe, pokemon) {
			if (!pokemon.side || pokemon.side.active.length < 2) return spe;

			const ally = pokemon.allies().find(p => p && !p.fainted);
			if (!ally) return spe;
			this.add(ally.baseSpecies);

			const myAction = this.queue.willMove(pokemon);
			const allyAction = this.queue.willMove(ally);

			const myPriority = this.runEvent(
				'ModifyPriority',
				pokemon,
				myAction.target,
				myAction.move,
				myAction.move.priority
			);

			const allyPriority = this.runEvent(
				'ModifyPriority',
				ally,
				allyAction.target,
				allyAction.move,
				allyAction.move.priority
			);

			this.add('-activate', pokemon, 'ability: Mentor');

			return spe;
		},
		flags: {},
		name: "Mentor",
		rating: 3,
	}