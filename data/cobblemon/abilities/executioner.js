{
		onBasePower(basePower, attacker, defender, move) {
			if (target.maxhp = target.hp) {
				this.debug('Executioner Normal');
				return this.chainModify(0.5);

			}
			else {
				this.debug('Executioner Boost');
				return chainmodify(1.2 + (target.hp / target.maxhp))
			}
		},
		flags: {},
		name: "Executioner",
		rating: 3.5,
}