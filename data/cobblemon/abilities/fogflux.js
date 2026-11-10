{
	onModifySpAPriority: 5,
    onModifySpe(spa) {
			if (this.field.isTerrain('mistyterrain')) {
				return this.chainModify(1.5);
			}
		},
		flags: {},
		name: "Fog Flux",
		rating: 3,
}