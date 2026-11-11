{
		onBasePower(basePower, attacker, defender, move) {
			if (defender.maxhp = defender.hp) {
				this.debug('Executioner Normal');
				return this.chainModify(0.66);

			}
			else {
				this.debug('Executioner Boost');
				return chainmodify(1.25 + (defender.hp / defender.maxhp))
			}
		},
		flags: {},
		name: "Executioner",
		rating: 3.5,
}