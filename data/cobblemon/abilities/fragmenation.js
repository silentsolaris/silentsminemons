{
    onDamagingHit(damage, target, source, move) {
			const side = source.isAlly(target) ? source.side.foe : source.side;
			const stealthrock = side.sideConditions['stealthrock'];
			if (move.category === 'Physical' && (!stealthrock)) {
				this.add('-activate', target, 'ability: Fragmentation');
				side.addSideCondition('stealthrock');
			}
		},
		flags: {},
		name: "Fragmentation",
		rating: 3.5,
}