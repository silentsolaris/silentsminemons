{
	onAnyEffectivenessPriority: 1,
	onAnyEffectiveness(typeMod, target, source, move) {
		if (!move || move.category === 'Status') return;

		this.add('Anomalous invert: ' + typeMod);
		return -typeMod;
	},
	flags: {},
	name: "Anomalous",
	rating: 3,
}