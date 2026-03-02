{
		onUpdate(pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Savagery');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'confusion'){
				let stats = [];
     			const boost = {};
				let statPlus;
				for (statPlus in pokemon.boosts) {
					if (statPlus === "accuracy" || statPlus === "evasion")
					continue;
					if (pokemon.boosts[statPlus] < 6) {
						stats.push(statPlus);
					}
				}
				let randomStat = stats.length ? this.sample(stats) : void 0;
				if (randomStat)
				boost[randomStat] = 1;
			}
		},
		flags: { breakable: 1 },
		name: "Savagery",
		rating: 3,
	}