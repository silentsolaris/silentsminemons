{
		onModifyMove(move, pokemon) {
			if (move.type === ('Steel')) {
				move.boosts = { spe: -1};
			}
		},
			flags: { },
			name: "Silver Tongue",
			rating: 3,
	}