{
	onEffectivenessPriority: 1,
	onEffectiveness(typeMod, target, type, move) {
		if (move.category === 'Status') return;

		this.add('Anomalous invert: ' + typeMod);

		return -typeMod;
	},
	flags: {},
	name: "Anomalous",
	rating: 3,
}