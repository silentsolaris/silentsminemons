{
    num: 42031,
		accuracy: 70,
		basePower: 120,
		category: "Special",
		name: "Locust Wave",
		pp: 10,
		priority: 0,
		flags: { protect: 1, mirror: 1, distance: 1, metronome: 1, wind: 1 },
		onModifyMove(move, pokemon, target) {
			switch (target?.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.accuracy = true;
				break;
			case 'sandstorm':
			case 'snow':
				move.accuracy = 50;
				break;
			}
		},
		onHit(target, source, move) {
			const item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Locust Wave', `[of] ${source}`);
				if (this.singleEvent('Eat', item, target.itemState, source, source, move)) {
					this.runEvent('EatItem', source, source, move, item);
					if (item.id === 'leppaberry') target.staleness = 'external';
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		target: "any",
		type: "Bug",
		contestType: "Clever",
}