{
		onBasePower(basePower, attacker, defender, move) {
			if (pokemon.maxhp = pokemon.hp) {
				this.debug('Heroism Normal');
				return this.chainModify(0.8);

			}
			else {
				this.debug('Heroism Boost');
				return chainmodify(1.2 + ( pokemon.maxhp / pokemon.hp))
			}
		},
			flags: {},
			name: "Heroism",
			rating: 5,
}