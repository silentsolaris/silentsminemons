{
	onAnyAfterSetStatus(status, target, source, effect) {
      if (target === source || target.isAlly(this.effectState.target))
        return;
      if (status.id === "psn" || status.id === "tox") {
		this.add('-ability', source, 'Neurotoxin');
		this.boost({ spe: -1 }, target, source, null, true);
      }
    },
		flags: { breakable: 1 },
		name: "Neurotoxin",
		rating: 3,
	}