{
		onBasePower(basePower, pokemon, target, move) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				if (move.type === "Rock") {
					return this.chainModify(1.5);
				}
			}
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (['raindance', 'primordialsea'].includes(source.effectiveWeather())) {
				if (move.type === "Rock") {
					return true;
				}
			}
		},
		flags: {},
		name: "Maritime",
		rating: 3,
	}