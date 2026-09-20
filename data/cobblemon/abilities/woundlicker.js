{       
        onResidualOrder: 30,
			onResidual(pokemon) {
                for (const ally of pokemon.adjacentAllies()) {
				this.heal(ally.baseMaxhp / 8, ally, pokemon);
			}
		},
		flags: {},
		name: "Wound Licker",
		rating: 0,
		num: 294,
}