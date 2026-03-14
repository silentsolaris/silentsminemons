{
		
			onResidualOrder: 28,
			onResidualSubOrder: 2,
			onResidual(pokemon) {
				let typelist = [
					"Normal",
					"Fire",
					"Water",
					"Electric",
					"Grass",
					"Ice",
					"Fighting",
					"Poison",
					"Ground",
					"Flying",
					"Psychic",
					"Bug",
					"Rock",
					"Ghost",
					"Dragon",
					"Dark",
					"Steel",
					"Fairy"
				];

				let newtype = this.sample(typelist);
				const index = typelist.indexOf(newtype);
				newtypes.push(this.sample(typelist))
				typelist.splice(index, 1);
				if ((this.randomChance(1, 18))) {
					newtypes.push(this.sample(typelist))
					this.add(pokemon + "'s types changed to " + newtypes[0], newtypes[1]);
					if (!pokemon.setType(newtypes)) return false;
				}
				
				this.add(pokemon + "'s type changed to " + newtypes[0]);
				if (!pokemon.setType(newtypes)) return false;
			},
			onEffectivenessPriority: -2,
			onEffectiveness(typeMod, target, type, move) {
				if (move.category === 'Status') return;
				if (target.runImmunity(move)) {
					return 1;
				}
				return typeMod * -1;
			},
			
		flags: {},
		name: "Anomalous",
		rating: 3,
	}