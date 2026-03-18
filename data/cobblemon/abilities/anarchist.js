{
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Anarchist weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fighting') {
				this.debug('Anarchist weaken');
				return this.chainModify(0.5);
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Fighting') {
				this.boost({ atk: 1 });
			}
		},
		flags: { breakable: 1},
		name: "Anarchist",
		rating: 3,
	}