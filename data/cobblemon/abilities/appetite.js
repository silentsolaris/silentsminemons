{
		onStart(pokemon) {
			pokemon.abilityState.gluttony = true;
		},
		onDamage(item, pokemon) {
			pokemon.abilityState.gluttony = true;
		},	
		onEatItem(item, pokemon, source, effect) {
			if (item.isBerry) {
				if (pokemon.baseSpecies.baseSpecies !== 'gourmooze' || pokemon.transformed || !pokemon.hp) return;
				if (pokemon.baseSpecies.forme === 'Obese') return;
				this.add('-activate', pokemon, 'ability: Appetite');
				pokemon.formeChange('gourmooze-Obese', this.effect, true);
				pokemon.formeRegression = true;
			}
		},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1},
		name: "Appetite",
		rating: 1,
	}