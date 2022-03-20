import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	border-radius: 5px;
	width: 320px;
	height: 35px;
	outline: none;
	border: 0;
	background: #5aac44;
	font-family: 'Raleway', sans-serif;
	font-weight: 700;
	letter-spacing: 0.3px;
	color: #ffffff;
	cursor: pointer;
	&:hover {
		background: #60b847;
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.8;
		background: #5aac44;
	}
`

const Button = ({ children, isDisabled }) => {
	return <StyledButton disabled={isDisabled}>{children}</StyledButton>
}

export default Button
