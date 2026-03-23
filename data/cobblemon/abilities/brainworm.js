{
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (source.hasType('Psychic')) return false;
				if (!source.addType('Psychic')) return false;
				this.add('-start', target, 'typeadd', 'Psychic', '[from] ability: Brain Worm');
			}
		},		
		flags: { breakable: 1 },
		name: "Brain Worm",
		rating: 3,
	}