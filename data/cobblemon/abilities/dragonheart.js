{
		onBasePower(basePower, pokemon, target, move) {
			if (this.field.isTerrain('psychicterrain') && pokemon.isGrounded() && move.type === "Dragon") {
				return this.chainModify(1.5);
			}
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status" && move.type === "Dragon") {
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 15,
					volatileStatus: 'flinch',
				});
			}
		},
		flags: {},
		name: "Dragonheart",
		rating: 3,
	}