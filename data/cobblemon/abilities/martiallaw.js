{
    onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Martial Law boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Martial Law boost');
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Martial Law",
		rating: 3.5,
}