{
		onModifySpe(spe, pokemon) {
			if (!pokemon.side || pokemon.side.active.length < 2) return spe;

			const ally = pokemon.allies().find(p => p && !p.fainted);
			if (!ally) return spe;
			this.add(ally.baseSpecies);

			this.add('-activate', pokemon, 'ability: Mentor');

			return spe;
		},
		flags: {},
		name: "Mentor",
		rating: 3,
	}