{
	onAnyEffectivenessPriority: 1,
	onAnyEffectiveness(typeMod, source, target, type, move) {
		if (move.category === 'Status') return;
		this.add('Anomalous (attacker): ' + typeMod);
		return -typeMod;
	},
	flags: {},
	name: "Anomalous",
	rating: 3,
}