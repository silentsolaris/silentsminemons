{
    onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({ spe: length }, source);
			}
		},
		flags: {},
		name: "Conquerer",
		rating: 3,
}