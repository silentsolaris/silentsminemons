{
		onSourceDamagingHit(damage, target, source, move) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				if (move.type === "Bug") {
					if (this.randomChance(5, 10)) {
					target.trySetStatus('psn', source);
				}
				}
			}
		},
		flags: {},
		name: "Plague Bringer",
		rating: 3,
}