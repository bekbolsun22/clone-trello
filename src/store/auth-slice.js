import { createSlice } from '@reduxjs/toolkit'

const USERS = [
	{
		email: 'test@mail.ru',
		password: '123123',
	},
	{
		email: 'beka@gmail.com',
		password: '020202',
	},
	{
		email: 'ulukmanapo@mail.ru',
		password: 'denzel',
	},
]

const authSlice = createSlice({
	name: 'auth',
	initialState: { isAuth: false },
	reducers: {
		login(state, action) {
			const { email, password } = action.payload
			const isAuth = USERS.some(
				(el) => el.email === email && el.password === password,
			)
			state.isAuth = isAuth ? true : false
		},
	},
})

export const authActions = authSlice.actions
export default authSlice
