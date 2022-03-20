import { createSlice } from '@reduxjs/toolkit'

const initState = {
	columnTasks: [],
}

const cardSlice = createSlice({
	name: 'card',
	initialState: initState,
	reducers: {
		addColumn(state, action) {
			state.columnTasks.push(action.payload)
		},
		addCardToTheList(state, action) {
			const { cardData, id } = action.payload
			state.columnTasks = state.columnTasks.map((item) => {
				if (item.id === id) {
					item.tasks.push(cardData)
				}
				return item
			})
		},
	},
})

export const cardActions = cardSlice.actions
export default cardSlice
