{
		onBasePower(basePower, pokemon, target, move) {
			if (this.field.isTerrain('psychicterrain') && source.isGrounded() && move.type === 'dragon') {
				this.debug('terrain buff');
				return this.chainModify(1.5);
			}
		},
		onModifyMove(move) {
			if (move.category !== "Status" && move.type === 'dragon') {
				this.debug('Adding Dragonheart flinch');
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
				});
			}
		},
		flags: {},
		name: "Dragonheart",
		rating: 3,
	}