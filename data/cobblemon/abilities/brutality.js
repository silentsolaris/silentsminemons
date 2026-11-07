{
		onAfterHit(target, source, move) {
			if (!source.hp) {
				source.addVolatile('destinybond');
			}
		},
		flags: {},
		name: "Brutality",
		rating: 3.5,
}