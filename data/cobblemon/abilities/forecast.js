{
    {
            onModifySpe(spe, pokemon) {
			if (['raindance', 'primordialsea', 'sunnyday', 'desolateland', 'sandstorm', 'snowscape', 'hail', 'deltastream'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(5325, 4096);
			}
		},
        onModifySpe(spa, pokemon) {
			if (['raindance', 'primordialsea', 'sunnyday', 'desolateland', 'sandstorm', 'snowscape', 'hail'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(5325, 4096);
			}
		},
        onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
        onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		flags: {},
		name: "Forecast",
		rating: 3
	}
}