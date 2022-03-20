import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { SiTrello } from 'react-icons/si'
import LoginForm from './LoginForm'
import Background from '../UI/Background'
import leftIcon from '../../assets/leftLarge.svg'
import rightIcon from '../../assets/rightLarge.svg'

const TitleDiv = styled.div`
	margin: 40px auto;
	width: 192px;
	height: 43px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Raleway', sans-serif;
	h1 {
		font-size: 50px;
		color: #253858;
		padding-top: 2px;
	}
`

const LeftBackImage = styled.div`
	position: absolute;
	width: 400px;
	bottom: 0;
	left: 0;
	z-index: -999;
	max-width: 30%;
`
const RightBackImage = styled.div`
	position: absolute;
	width: 400px;
	bottom: 0;
	right: 0;
	z-index: -999;
	max-width: 30%;
`

const background = ReactDOM.createPortal(
	<Background>
		<LeftBackImage>
			<img src={leftIcon} alt='' />
		</LeftBackImage>
		<RightBackImage>
			<img src={rightIcon} alt='' />
		</RightBackImage>
	</Background>,
	document.getElementById('background'),
)

const LoginPage = () => {
	return (
		<Fragment>
			<TitleDiv>
				<SiTrello color='#0079bf' fontSize='40px' />
				<h1>Trello</h1>
			</TitleDiv>
			<LoginForm />
			{background}
		</Fragment>
	)
}

export default LoginPage
