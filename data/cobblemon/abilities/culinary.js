{
	onAnyEatItem(item, pokemon) {
      	if (!pokemon.isAdjacent(this.effectState.target)) return;
		if (pokemon.hp && item.isBerry && item && this.effectState.target.abilityState.full === false) {
			this.add('-activate', this.effectState.target, 'ability: Culinary', "[of] " + pokemon);

			if (this.singleEvent('Eat', item, null, pokemon, this.effectState.target)) {
				this.runEvent('EatItem', pokemon, this.effectState.target, null, item);
				if (item.id === 'leppaberry') pokemon.staleness = 'external';
				this.effectState.target.abilityState.full = true;
			}
		}
	},
	onStart(pokemon) {
		pokemon.abilityState.full = false;
	},
	onEnd(pokemon) {
		pokemon.abilityState.full = false;
	},
	flags: {},
	name: "Culinary",
	rating: 3,
}