export const InputActionsType = {
	add: 'add',
	remove: 'remove',
	change: 'change'
}


export const inputActions = {

	add: (value = '') => {
		return {
			type: InputActionsType.add,
			payload:{value}
		}
	},
	remove: (index) => {
		return {
			type: InputActionsType.remove,
			payload:{index}
		}
	},
	change: (index, value) => {
		return {
			type: InputActionsType.change,
			payload: {index, value}
		}
	}
}