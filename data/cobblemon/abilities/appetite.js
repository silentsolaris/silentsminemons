{
		onStart(pokemon) {
			pokemon.abilityState.gluttony = true;
		},
		onDamage(item, pokemon) {
			pokemon.abilityState.gluttony = true;
		},	
		onEatItem(item, pokemon, source, effect) {
			if (item.isBerry) {
				this.add(pokemon.baseSpecies);
				this.add(pokemon.baseSpecies.forme);
				if (pokemon.baseSpecies !== 'gourmooze' || pokemon.transformed || !pokemon.hp) return;
				this.add("Ok we got a gourmooze ova here!");
				if (pokemon.baseSpecies.forme === 'Obese') return;
				this.add("And he's not obese!!!");
				this.add('-activate', pokemon, 'ability: Appetite');
				pokemon.formeChange('gourmooze-Obese', this.effect, true);
				pokemon.formeRegression = true;
			}
		},
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1},
		name: "Appetite",
		rating: 1,
	}