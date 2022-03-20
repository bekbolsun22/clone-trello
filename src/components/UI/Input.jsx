import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
	width: 320px;
	height: 44px;
	padding: 7px;
	border: ${(props) =>
		props.isEmpty ? '2px solid red' : '2px solid #dfe1e6'};
	border-radius: 3px;
	outline: none;
	font-family: 'Rubik', sans-serif;
	background-color: #fafbfc;
	&:focus {
		transition: all 0.3s linear;
		border: 2px solid #6dadff;
	}
`

const Input = (props) => {
	return (
		<div style={{ paddingBottom: '10px' }}>
			<StyledInput {...props} />
			{props.children}
		</div>
	)
}

export default Input
