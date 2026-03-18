{
		onTryHealPriority: 1,
		onTryHeal(damage, target, source, effect) {
			const heals = ['drain', 'leechseed', 'ingrain', 'aquaring', 'strengthsap'];
			if (heals.includes(effect.id)) {
				return this.chainModify([5324, 4096]);
			}
		},
		onTerrainChange(pokemon) {
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Decayde' || pokemon.transformed) return;
			if (!pokemon.hp) return;
			if (this.field.terrain === 'grassyterrain') {
				if (pokemon.species.id !== 'decayderejuv') {
					pokemon.formeChange('Decayde-Rejuv', this.effect, false, '0', '[msg]');
				}
			} else {
				if (pokemon.species.id === 'decayderejuv') {
					pokemon.formeChange('Decayde', this.effect, false, '0', '[msg]');
				}
			}
		},
		flags: {},
		name: "Last Grasp",
		rating: 3,
	}