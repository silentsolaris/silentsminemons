{
	    onModifySpDPriority: 1,
		onModifySpD(spd, pokemon) {
			if (pokemon.hasItem('assaultvest')) return;
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (pokemon.hasItem('assaultvest')) return;
			for (const moveSlot of pokemon.moveSlots) {
				const move = this.dex.moves.get(moveSlot.id);
				if (move.category === 'Status' && move.id !== 'mefirst') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
        flags: {},
	    name: "Anarchist",
	    rating: 3,
}