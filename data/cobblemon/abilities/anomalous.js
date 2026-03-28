{
		onEffectivenessPriority: -2,
		onEffectiveness(typeMod, target, type, move) {
			if (move.category === 'Status') return;
			if (!target.runImmunity(move)) {
				this.add("Immune");
				return 1;
			}
			this.add("Effectiveness: " + typeMod);
			return typeMod * -1;
		},
		flags: {},
		name: "Anomalous",
		rating: 3,
	}