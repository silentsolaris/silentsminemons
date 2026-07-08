{
        onAfterMoveSecondarySelfPriority: -1,
		onAfterMoveSecondarySelf(pokemon, target, move) {
            if (target.status === 'slp' || target.hasAbility('comatose')) {
                if (move.totalDamage && !pokemon.forceSwitchFlag) {
				this.heal(move.totalDamage / 4, pokemon);
			    }
            }
		},
        flags: {},
		name: "Dreamcatcher",
		rating: 3,
}