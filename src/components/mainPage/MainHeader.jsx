import React from 'react'
import styled from 'styled-components'
import burgerMenuImage from '../../assets/icons8-circled-menu-24.png'
import searchImage from '../../assets/icons8-search-30.png'

const StyledHeader = styled.header`
	height: 48px;
	background-color: #565958;
	color: white;
	display: flex;
	justify-content: space-between;
	& .flexible_div {
		display: flex;
		align-items: center;
	}
`
const StyledDiv = styled.div`
	padding: 0 15px;
	cursor: pointer;
`
const StyledList = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;
	justify-content: space-between;
	width: 600px;
	padding: 0 15px 5px 15px;
	li {
		font-size: 14px;
		padding: 8px;
		border-radius: 8px;
		cursor: pointer;
	}
	li:hover {
		background-color: #787a79;
	}
`
const StyledButton = styled.button`
	padding: 2px 12px;
	position: relative;
	bottom: 2px;
	border: none;
	height: 32px;
	margin: 0 25px;
	background-color: #787a79;
	color: white;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #b2b2b1;
	}
`
const StyledInput = styled.div`
	width: 250px;
	display: flex;
	align-items: center;
	background-color: #787a79;
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 3px;
	margin-right: 15px;
	input {
		height: 32px;
		border: none;
		outline: none;
		background-color: #787a79;
		padding: 5px;
	}
	input::placeholder {
		color: white;
		font-size: 15px;
	}
	span {
		cursor: pointer;
	}
	span img {
		width: 32px;
		padding: 4px;
	}
`

const MainHeader = () => {
	return (
		<StyledHeader>
			<div className='flexible_div'>
				<StyledDiv>
					<img src={burgerMenuImage} />
				</StyledDiv>
				<div></div>
				<StyledList>
					<li>Рабочие пространства</li>
					<li>Недавние</li>
					<li>В избранном</li>
					<li>Шаблоны</li>
				</StyledList>
				<StyledButton>Создать</StyledButton>
			</div>
			<div className='flexible_div'>
				<StyledInput>
					<span>
						<img src={searchImage} alt='' />
					</span>
					<input type='text' placeholder='Поиск' />
				</StyledInput>
			</div>
		</StyledHeader>
	)
}

export default MainHeader
