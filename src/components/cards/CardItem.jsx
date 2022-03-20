import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import moreIcon from '../../assets/icon-more24.png'
import templateIcon from '../../assets/icon-template.png'
import closeIcon from '../../assets/x-icon.png'
import { cardActions } from '../../store/card-slice'
import CardItemTask from './CardItemTask'

const StyledCardDiv = styled.div`
	width: 270px;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	background-color: #ebecf0;
	margin-right: 10px;
	max-height: 550px;
	overflow: auto;
	overflow-x: hidden;
	& .title {
		display: flex;
		align-items: center;
		padding: 4px;
		position: sticky;
		top: 0;
		background-color: inherit;
	}
	& .title input {
		width: 244px;
		padding: 5px 5px 5px 12px;
		background-color: inherit;
		color: #2f415f;
		outline: none;
		border: none;
		cursor: pointer;
		font-size: 15px;
		font-weight: 700;
	}
	& .title input:focus {
		transition: border ease-in 80ms;
		border: 2px solid #0079bf;
		border-radius: 3px;
		padding: 5px 5px 5px 9px;
		background-color: #ffffff;
	}
	& .title img {
		padding: 4px;
		margin-left: 1px;
	}
	& .title img:hover {
		cursor: pointer;
		background-color: #dddddd;
		border-radius: 3px;
	}
	& .add_card_block {
		width: 270px;
		padding: 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		p {
			width: 229px;
			color: #7d7f7e;
			padding: 6px;
			border-radius: 4px;
			&:hover {
				background-color: #dddddd;
				cursor: pointer;
			}
		}
		div {
			padding: 4px;
			margin-left: 1px;
		}
		div:hover {
			padding: 4px;
			margin-left: 1px;
			cursor: pointer;
			background-color: #dddddd;
			border-radius: 3px;
		}
	}
	ul {
		padding: 5px;
		li {
			width: 260px;
			margin: 0 auto;
			margin-top: 5px;
			background: white;
			color: black;
			padding: 6px;
			border-radius: 4px;
			list-style: none;
			cursor: pointer;
			&:hover {
				transition: 0.5s;
				background: silver;
			}
		}
	}
`
const AddListBlock = styled.div`
	background-color: #ebecf0;
	border-radius: 3px;
	height: auto;
	min-height: 32px;
	padding: 4px 0 0 3.5px;
	width: 270px;
	animation: IN 0.3s ease-in;
	@keyframes IN {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	textarea {
		width: 263px;
		height: 56px;
		padding: 7px;
		border: 2px solid #ffffff;
		box-shadow: 1px 1px 5px #565958;
		border-radius: 3px;
		outline: none;
		font-family: 'Rubik', sans-serif;
		max-width: 263px;
		max-height: 100px;
	}
	div {
		display: flex;
		align-items: center;
		padding: 4px 0;
	}
	button {
		width: 134px;
		height: 32px;
		border: none;
		background-color: #0079bf;
		border-radius: 3px;
		color: white;
		margin-right: 12px;
		cursor: pointer;
		font-family: 'Rubik', sans-serif;
	}
	button:hover {
		background-color: #0053bf;
	}
	img {
		width: 20px;
		cursor: pointer;
		opacity: 0.8;
	}
	img:hover {
		opacity: 1;
	}
`
const CardItem = ({ title, tasks, id }) => {
	const dispatch = useDispatch()
	const [showButton, setShowButton] = useState(false)
	const [text, setText] = useState('')
	const showAddButtonHandler = () => {
		setShowButton((prevState) => !prevState)
	}
	const taskChangeHandler = (e) => {
		setText(e.target.value)
	}
	const addCardHandler = () => {
		if (text.trim().length > 0) {
			const cardData = {
				text,
				taskId: Math.random().toString(),
			}
			dispatch(cardActions.addCardToTheList({ cardData, id }))
			setText('')
		}
	}
	const content = showButton ? (
		<AddListBlock>
			<textarea
				type='text'
				placeholder='Ввести заголовок для этой карточки'
				onChange={taskChangeHandler}
				value={text}
			/>
			<div>
				<button onClick={addCardHandler}>Добавить карточку</button>
				<img
					src={closeIcon}
					alt='close'
					onClick={showAddButtonHandler}
				/>
			</div>
		</AddListBlock>
	) : (
		<div className='add_card_block'>
			<p onClick={showAddButtonHandler}>
				<span>+</span>Добавить карточку
			</p>

			<div>
				<img src={templateIcon} alt='' />
			</div>
		</div>
	)
	return (
		<StyledCardDiv>
			<div className='title'>
				<input type='text' defaultValue={title} />
				<img src={moreIcon} alt='more' />
			</div>
			<ul>
				{tasks.map((item) => (
					<CardItemTask
						key={item.taskId}
						text={item.text}
						columnName={title}
					/>
				))}
			</ul>
			{content}
		</StyledCardDiv>
	)
}

export default CardItem
