{
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Ghost') {
				if (!this.boost({ spd: 1 })) {
					this.add('-immune', target, '[from] ability: Siren\'s Call');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Ghost' || move.flags['pledgecombo']) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Siren\'s Call');
				}
				return this.effectState.target;
			}
		},
		flags: { breakable: 1},
		name: "Siren's Call",
		rating: 3,
	}