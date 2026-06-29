{
    onStart(source) {
                if  this.field.setWeather('raindance') {
                        this.field.setWeather('sunnyday');
                    },
                    if  this.field.setWeather('sunnyday') {
                        this.field.setWeather('sandstorm');
                    },
                    if  this.field.setWeather('sandstorm') {
                        this.field.setWeather('snowscape');
                    },
                    if  this.field.setWeather('snowscape') {
                        this.field.setWeather('raindance');
                    }
		},
		flags: {},
		name: "Climate Change",
		rating: 3,
}