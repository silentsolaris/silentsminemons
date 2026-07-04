{
    onStart(pokemon) {
		let activated = false;
			if this.field.getPseudoWeather('trickroom') {
				this.boost({ spe: -2 }, pokemon);
				this.field.setPseudoWeather('trickroom');
				this.field.setPseudoWeather('trickroom');
			},
			activated = true;
		},
		flags: {},
		name: "Time Warp",
		rating: 4,
}