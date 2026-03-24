{
		onModifySpe(spe, pokemon) {
			if (!pokemon.side || pokemon.side.active.length < 2) return spe;

			const ally = pokemon.allies().find(p => p && !p.fainted);
			this.add(ally.baseSpecies);
			if (!ally) return spe;

			this.add('-activate', pokemon, 'ability: Mentor');
		},
		flags: {},
		name: "Mentor",
		rating: 3,
	}