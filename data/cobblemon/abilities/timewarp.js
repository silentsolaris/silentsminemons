{
    onStart(pokemon) {
		if (pokemon.timeWarped) return;
			if (this.field.getPseudoWeather('trickroom')) {
				this.boost({ spe: -2 }, pokemon);
				this.field.removePseudoWeather('trickroom');
				this.field.addPseudoWeather('trickroom');
				pokemon.timeWarped = true;
			}
		},
		flags: {},
		name: "Time Warp",
		rating: 4,
}