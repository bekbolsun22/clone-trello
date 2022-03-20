import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import closeIcon from '../../assets/x-icon.png'
import { cardActions } from '../../store/card-slice'
import CardItem from './CardItem'

const Cards = () => {
	const [showAddButton, setShowAddButton] = useState(false)
	const columnTasks = useSelector((state) => state.card.columnTasks)
	const dispatch = useDispatch()
	const [title, setTitle] = useState('')
	const showAddButtonHandler = () => {
		setShowAddButton((prevState) => !prevState)
	}
	const titleChangeHandler = (e) => {
		setTitle(e.target.value)
	}
	const addColumnHandler = (e) => {
		e.preventDefault()
		if (title.trim().length > 0) {
			const data = {
				title,
				id: Math.random().toString(),
				tasks: [],
			}
			dispatch(cardActions.addColumn(data))
			setTitle('')
			setShowAddButton(false)
		}
	}
	const content = showAddButton ? (
		<AddListBlock onSubmit={addColumnHandler}>
			<input
				type='text'
				placeholder='Ввести заголовок списка'
				onChange={titleChangeHandler}
				value={title}
				autoFocus
			/>
			<div>
				<button>Добавить список</button>
				<img
					src={closeIcon}
					alt='close'
					onClick={showAddButtonHandler}
				/>
			</div>
		</AddListBlock>
	) : (
		<AddListDiv onClick={showAddButtonHandler}>
			<span className='plus'>+</span>
			<span className='add_text'>
				{columnTasks.length > 0
					? 'Добавить ещё одну колонку'
					: 'Добавить список'}
			</span>
		</AddListDiv>
	)
	return (
		<StyledCardsDiv>
			{columnTasks.map((item) => (
				<CardItem
					key={item.id}
					title={item.title}
					tasks={item.tasks}
					id={item.id}
				/>
			))}
			{content}
		</StyledCardsDiv>
	)
}

const StyledCardsDiv = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: start;
	margin: 25px;
	color: white;
	width: 100%;
`
const AddListDiv = styled.div`
	& {
		display: flex;
		align-items: center;
		width: 270px;
		background-color: #7a7f7eb2;
		border-radius: 5px;
		padding-bottom: 3px;
		cursor: pointer;
	}
	&:hover {
		background-color: #929695c7;
	}
	& .plus {
		font-size: 25px;
		font-weight: 350;
		padding: 0 2px 5px 17px;
	}
	& .add_text {
		font-size: 14px;
		font-weight: 500;
	}
`
const AddListBlock = styled.form`
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
	input {
		width: 263px;
		height: 36px;
		padding: 7px;
		border: 2px solid #0079bf;
		border-radius: 3px;
		outline: none;
		font-family: 'Rubik', sans-serif;
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

export default Cards
