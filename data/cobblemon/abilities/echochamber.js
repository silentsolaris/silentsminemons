{
		
	onStart(pokemon) {
			pokemon.abilityState.echomessage = false;
		},
	onBasePowerPriority: 22,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound'] && this.field.pseudoWeather.echoedvoice) {
				return this.chainModify(1 + (0.20 * this.field.pseudoWeather.echoedvoice.multiplier));
			}
		},
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound'] && this.field.pseudoWeather.echoedvoice) {
				return this.chainModify(1 + (0.10 * this.field.pseudoWeather.echoedvoice.multiplier));
			}
		},
		onSourceTryPrimaryHit(target, source, move) {
			if (move.flags['sound'] && source.abilityState.echomessage === false) {
				this.field.addPseudoWeather('echoedvoice');
				switch (this.field.pseudoWeather.echoedvoice.multiplier) {
				case 1:
				this.add('-activate', source, 'ability: Resonance', '[msg]echo1');
					break;
				case 2:
				this.add('-activate', source, 'ability: Resonance', '[msg]echo2');
					break;
				case 3:
				this.add('-activate', source, 'ability: Resonance', '[msg]echo3');
					break;
				case 4:
				this.add('-activate', source, 'ability: Resonance', '[msg]echo4');
					break;
				case 5:
				this.add('-activate', source, 'ability: Resonance', '[msg]echo5');
				}
				source.abilityState.echomessage = true;
			}
		},
		onResidual(pokemon) {
			if (pokemon.abilityState.echomessage === true) {
				pokemon.abilityState.echomessage = false;
			}
		},
		flags: {},
		name: "Resonance",
		rating: 3,
	}