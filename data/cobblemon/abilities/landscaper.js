{
	onFractionalPriorityPriority: -2,
	onBasePowerPriority: 23,
	onStart(pokemon) {
		let activated = false;
			if (this.field.isTerrain('grassyterrain')) {
				this.heal(pokemon.baseMaxhp / 3);
				activated = true;
			}
			else if (this.field.isTerrain('psychicterrain')) {
				onHit(target, source) {
				source.addVolatile('lockon', target);
			},
			activated = true;
				}
			else if (this.field.isTerrain('electricterrain')) {
				if (source.activeMoveActions > 0) {
					onFractionalPriority(priority, pokemon, target, move) {
						return 0.1;
					}
				},
				activated = true;
			}
			else if (this.field.isTerrain('mistyterrain')) {
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
			    this.boost(boost);
				activated = true;
			}
		},
		flags: {},
		name: "Landscaper",
		rating: 3.5,
}