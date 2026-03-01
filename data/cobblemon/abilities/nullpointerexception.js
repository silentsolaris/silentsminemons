{
		onBeforeSwitchIn(pokemon) {
			pokemon.setType('???');
		},
		onChangeBoost(boost, target, source, effect) {
          if (effect && effect.id === "zpower")
            return;
          let i;
          for (i in boost) {
            boost[i] *= -1;
          }
        },
		flags: { breakable: 1 },
		name: "NullPointerException",
		rating: 4,
	}