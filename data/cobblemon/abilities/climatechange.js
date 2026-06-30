{
    onStart(pokemon) {
        let activated = false;
                    if  (!activated && this.field.isWeather(['raindance'])) {
                        this.field.setWeather('sunnyday');
                        this.debug('The climate shifted!');
                        activated = true;
                    };
                    if  (!activated && this.field.isWeather(['sunnyday'])) {
                        this.field.setWeather('sandstorm');
                        this.debug('The climate shifted!');
                        activated = true;
                    };
                    if  (!activated && this.field.isWeather(['sandstorm'])) {
                        this.field.setWeather('snowscape');
                        this.debug('The climate shifted!');
                        activated = true;
                    };
                    if  (!activated && this.field.isWeather(['snowscape' || 'hail'])) {
                        this.field.setWeather('raindance');
                        this.debug('The climate shifted!');
                        activated = true;
                    };
		},
		flags: {},
		name: "Climate Change",
		rating: 4,
}