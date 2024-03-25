import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	todo: [],
	basket: []
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTask(state, action) {
			state.todo = [...state.todo, action.payload]
		},
		deleteTask(state, action) {
			state.todo = state.todo.filter(el => el.id !== action.payload)
		},
		addBasket(state, action) {
			state.basket = [...state.basket, action.payload]
		},
		deleteTaskBasket(state, action) {
			state.basket = state.basket.filter(el => el.id !== action.payload)
		}
	}
})

export const { addTask, deleteTask, deleteTaskBasket, addBasket } = todoSlice.actions
export default todoSlice.reducer
