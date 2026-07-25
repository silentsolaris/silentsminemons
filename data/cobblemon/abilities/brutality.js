{
		onAfterHit(target, source, move) {
			if (!source.hp) {
				target.addVolatile('destinybond');
			}
		},
		flags: {},
		name: "Brutality",
		rating: 3.5,
}