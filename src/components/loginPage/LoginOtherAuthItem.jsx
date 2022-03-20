import React from 'react'
import styled from 'styled-components'

const OtherAuthDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 320px;
	height: 48px;
	border-radius: 3px;
	box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
	font-family: 'Raleway', sans-serif;
	color: #505f79;
	font-weight: 700;
	margin-bottom: 15px;
	cursor: pointer;
	&:hover {
		background-color: #fafbfc;
	}
	img {
		width: 20px;
		height: 20px;
		margin-right: 5px;
	}
	span {
		font-size: 13px;
		padding-top: 3px;
	}
`

const LoginOtherAuthItem = ({ img, text }) => {
	return (
		<OtherAuthDiv>
			<img src={img} alt={text} />
			<span>{text}</span>
		</OtherAuthDiv>
	)
}

export default LoginOtherAuthItem
