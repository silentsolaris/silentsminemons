{
		onStart(pokemon) {
			pokemon.abilityState.undying = false;
		},
		onDamage(damage, target, source, effect) {
			if (damage >= target.hp && effect && effect.effectType === 'Move' && !target.abilityState.triggered) {
				this.add("-activate", target, "ability: Determination");
				target.abilityState.undying = true;
				target.abilityState.triggered = true;
				return target.hp - 1;
			}
		},
		onResidual(pokemon) {
			if (pokemon.abilityState.undying === false) return;
			pokemon.faint();
		},
		flags: {},
		name: "Determination",
		rating: 3,
}