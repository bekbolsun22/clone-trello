import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Cards from '../cards/Cards'
import Background from '../UI/Background'
import MainHeader from './MainHeader'

const StyledImage = styled.div`
	background-image: url(https://images.wallpaperscraft.ru/image/single/lampa_minimalizm_art_ruka_104566_1920x1080.jpg);
	background-size: cover;
	background-attachment: fixed;
	background-position: center;
	height: 100%;
`
const background = ReactDOM.createPortal(
	<Background>
		<StyledImage />
	</Background>,
	document.getElementById('background'),
)

const Main = () => {
	return (
		<>
			<MainHeader />
			<Cards />
			{background}
		</>
	)
}

export default Main
