{
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'psn' && status.id !== 'tox') return;
			this.add('-ability', source, 'Neurotoxin');
			this.boost({ spe: -1 }, target, source, null, true);
			return true;
		},
		flags: { breakable: 1 },
		name: "Neurotoxin",
		rating: 3,
	}