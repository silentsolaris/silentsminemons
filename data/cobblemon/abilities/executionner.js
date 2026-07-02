{
		onBasePower(basePower, attacker, defender, move) {
			if (target.maxhp = target.hp) {
				this.debug('Executionner Normal');
				return this.chainModify(0.5);

			}
			else {
				this.debug('Executionner Boost');
				return chainmodify(1.2 + (target.hp / target.maxhp))
			}
		},
		flags: {},
		name: "Executionner",
		rating: 3.5,
}