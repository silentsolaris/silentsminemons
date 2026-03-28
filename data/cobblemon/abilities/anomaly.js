{
	onSwitchIn(pokemon) {
			this.add("-ability", pokemon, "Anomaly");
		},
	onAnyEffectivenessPriority: 1,
	onAnyEffectiveness(typeMod, target, source, move) {
		if (!move || move.category === 'Status') return;
		return -typeMod;
	},
	flags: {},
	name: "Anomaly",
	rating: 3,
}