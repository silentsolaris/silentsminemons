{	
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'haddoster' || pokemon.transformed ) return;
				if (pokemon.baseSpecies.forme === 'revealed') return;
				this.add('-activate', pokemon, 'ability: Faker');
				pokemon.formeChange('haddoster-revealed', this.effect, true);
				pokemon.formeRegression = true;
		},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1},
		name: "Faker",
		rating: 1,
	}