import React from 'react'
import styled from 'styled-components'

const StyledUl = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	margin: 14px;
	li {
		font-size: 14px;
		text-align: center;
	}
	span {
		padding: 0 10px 0 10px;
	}
	li a {
		text-decoration: none;
		color: #286dd4;
	}
	li a:hover {
		text-decoration: underline;
	}
`

const LoginFormBottom = () => {
	return (
		<StyledUl>
			<li>
				<a href='/'>Не удается войти?</a>
			</li>
			<span>•</span>
			<li>
				<a href='/'>Зарегистрировать аккаунт</a>
			</li>
		</StyledUl>
	)
}

export default LoginFormBottom
