{
onDragOutPriority: 1,
		onDragOut(pokemon) {
			this.add('-activate', pokemon, 'ability: Tunnel Vision');
			return null;
		},
		onTryBoostPriority: 2,
		onTryBoost(boost, target, source, effect) {
			if (effect.name === 'Intimidate' && boost.atk) {
				delete boost.atk;
				this.boost({ spe: 2 }, target, target, null, false, true);
			}
		},
		flags: { breakable: 1 },
		name: "Tunnel Vision",
		rating: 2,
	}