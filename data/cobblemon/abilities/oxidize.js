{
		onHit(target, source, move) {
			if (!target.hp || target.volatiles['aquaring']) return;
			if (move.type === 'Electric' || move.type === 'Water') {
				if (move.type === 'Water') {
					this.add('-activate', target, 'ability: Oxidize', '[msg]water');
				}
				if (move.type === 'Electric') {
					this.add('-activate', target, 'ability: Oxidize', '[msg]electric');
				}
				target.addVolatile('aquaring');
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Electric') {
				this.debug('Oxidize weaken');
				return this.chainModify(0.75);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' || move.type === 'Electric') {
				this.debug('Oxidize weaken');
				return this.chainModify(0.75);
			}
		},
		flags: {},
		name: "Oxidize",
		rating: 3,
	}