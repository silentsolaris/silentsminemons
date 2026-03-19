{
		onEffectivenessPriority: -2,
		onEffectiveness(typeMod, target, type, move) {
			if (move.category === 'Status') return;
			if (target.runImmunity(move)) {
				return 1;
			}
			return typeMod * -1;
		},
		flags: {},
		name: "Anomalous",
		rating: 3,
	}