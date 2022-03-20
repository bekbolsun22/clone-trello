import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import Input from '../UI/Input'
import LoginOtherAuth from './LoginOtherAuth'
import useInput from '../../hooks/useInput'
import LoginFormBottom from './LoginFormBottom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/auth-slice'

const Form = styled.form`
	width: 400px;
	height: 680px;
	background-color: #ffffff;
	border-radius: 3px;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	margin-bottom: 45px;
	h1 {
		text-align: center;
		color: #5e6c84;
		font-size: 15px;
		letter-spacing: -0.01em;
		line-height: 28px;
		margin-top: 30px;
		margin-bottom: 25px;
		font-family: 'Montserrat', sans-serif;
	}
`
const SeparatorText = styled.div`
	margin: 20px auto;
	font-family: 'Rubik', sans-serif;
	font-size: 13px;
`
const StyledLine = styled.div`
	margin: 25px 0 14px 0;
	width: 320px;
	height: 1px;
	border-top: 1px solid hsl(0, 0%, 80%);
`

const ErrorMessage = styled.p`
	font-size: 11px;
	color: red;
	position: relative;
	bottom: 7px;
`

const LoginForm = () => {
	const email = useInput()
	const password = useInput()
	const dispatch = useDispatch()
	const [isNotAuth, setIsNotAuth] = useState(true)
	const isAuth = useSelector((state) => state.auth.isAuth)

	let isNotAuthMessage = isNotAuth ? (
		''
	) : (
		<ErrorMessage>Неверный логин или пароль</ErrorMessage>
	)

	const valuesIsCorrect = email.inputIsInvalid && password.inputIsInvalid

	let isDisabled = valuesIsCorrect ? false : true

	let errorMessageForEmail = email.inputIsEmpty ? (
		<ErrorMessage>Вы не указали адрес электронной почты</ErrorMessage>
	) : (
		''
	)
	let errorMessageForPassword = password.inputIsEmpty ? (
		<ErrorMessage>Вы не заполнили пароль</ErrorMessage>
	) : (
		''
	)
	const submitHandler = (e) => {
		e.preventDefault()
		const data = {
			email: email.enteredValue,
			password: password.enteredValue,
		}
		if (valuesIsCorrect) {
			dispatch(authActions.login(data))
		}
		if (!isAuth) {
			setIsNotAuth(false)
		}
		email.setEnteredValue('')
		email.setEnteredValueTouched(false)
		password.setEnteredValue('')
		password.setEnteredValueTouched(false)
	}

	return (
		<Form onSubmit={submitHandler}>
			<h1>Вход в Trello</h1>
			{isNotAuthMessage}
			<Input
				type='email'
				placeholder='Укажите адрес электронной почты'
				autoFocus='autofocus'
				onChange={email.inputChangeHandler}
				onBlur={email.inputBlurHandler}
				value={email.enteredValue}
				isEmpty={email.inputIsEmpty}
			/>
			{errorMessageForEmail}
			<Input
				type='password'
				placeholder='Введите пароль'
				onChange={password.inputChangeHandler}
				onBlur={password.inputBlurHandler}
				value={password.enteredValue}
				isEmpty={password.inputIsEmpty}
			/>
			{errorMessageForPassword}
			<Button isDisabled={isDisabled}>Войти</Button>

			<SeparatorText>ИЛИ</SeparatorText>

			<LoginOtherAuth />

			<StyledLine />

			<LoginFormBottom />
		</Form>
	)
}

export default LoginForm
