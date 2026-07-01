{
        onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['slicing']) {
				this.debug('Executionner boost');
				return this.chainModify(1.5);
			}
		},
        onTryHit(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: Executionner');
				return null;
			}
		},
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Executionner');
				return target.hp - 1;
			}
		},
		flags: {},
		name: "Executionner",
		rating: 3.5,
}