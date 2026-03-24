{
		onModifySpe(spe, pokemon) {
			if (!pokemon.side || pokemon.side.active.length < 2) return spe;

			const ally = pokemon.allies().find(p => p && !p.fainted);
			if (!ally) return spe;

			const myAction = this.queue.willMove(pokemon);
			const allyAction = this.queue.willMove(ally);

			if (!myAction || myAction.choice !== 'move') return spe;
			if (!allyAction || allyAction.choice !== 'move') return spe;

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

			if (myPriority !== allyPriority) return spe;

			const mySpeed = pokemon.getActionSpeed();
			const allySpeed = ally.getActionSpeed();

			if (mySpeed >= allySpeed) return spe;

			this.add('-activate', pokemon, 'ability: Mentor');

			return allySpeed - 1;
		},
		flags: {},
		name: "Mentor",
		rating: 3,
	}