{
    num: 42091,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Landscape",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, metronome: 1, nonsky: 1},
        onEffectiveness(typeMod, target, type, move) {
            if (this.field.isTerrain('grassyterrain') && source.isGrounded()) {
				return typeMod + this.dex.getEffectiveness('Grass', type);
			};
            if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
				return typeMod + this.dex.getEffectiveness('Fairy', type);
			};
            if (this.field.isTerrain('psychicterrain') && source.isGrounded()) {
				return typeMod + this.dex.getEffectiveness('Psychic', type);
			};
            if (this.field.isTerrain('electricterrain') && source.isGrounded()) {
				return typeMod + this.dex.getEffectiveness('Electric', type);
			};
		},
		target: "any",
		type: "Ground",
		contestType: "Clever",
}