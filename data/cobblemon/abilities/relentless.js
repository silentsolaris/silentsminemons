{
	onAfterMoveSecondarySelf(pokemon, target, move) {
		if (!move.flags['recharge']) return;

		if (target && (target.fainted || target.hp <= 0)) {
			pokemon.removeVolatile('mustrecharge');
		}
	},
	flags: {},
	name: "Relentless",
	rating: 4
}