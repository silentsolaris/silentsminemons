{
        num: 42055,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Riptide_Minemons",
		pp: 5,
		priority: 0,
		flags: {
			contact: 1, charge: 1, protect: 1, mirror: 1,
			metronome: 1, nosleeptalk: 1, noassist: 1, failinstruct: 1,
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		onHit(target) {
			target.addVolatile('torment');
		},
		target: "any",
		type: "Water",
		contestType: "Cool",
}